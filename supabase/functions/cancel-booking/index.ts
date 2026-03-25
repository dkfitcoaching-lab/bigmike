import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { scheduleId, clientName, date, time, type, reason } = await req.json();

    if (!scheduleId) {
      return new Response(
        JSON.stringify({ error: "Missing scheduleId" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const twilioSid = Deno.env.get("TWILIO_ACCOUNT_SID");
    const twilioAuth = Deno.env.get("TWILIO_AUTH_TOKEN");
    const twilioFrom = Deno.env.get("TWILIO_PHONE_NUMBER");
    const coachPhone = Deno.env.get("COACH_PHONE");

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Update the schedule entry status to cancelled
    const { data: schedRow } = await supabase
      .from("schedule")
      .select("data")
      .eq("id", scheduleId)
      .single();

    if (schedRow?.data) {
      const updated = { ...schedRow.data, status: "cancelled" };
      await supabase
        .from("schedule")
        .upsert({ id: scheduleId, data: updated, updated_at: new Date().toISOString() }, { onConflict: "id" });
    }

    // Check cancellation policy
    const { data: settingsRow } = await supabase
      .from("app_settings")
      .select("value")
      .eq("key", "coach_availability")
      .single();

    const cancelHours = settingsRow?.value?.cancelHours || 24;
    let isLateCancel = false;

    if (date && time) {
      const sessionTime = new Date(`${date}T${time}:00`);
      const hoursUntil = (sessionTime.getTime() - Date.now()) / (1000 * 60 * 60);
      isLateCancel = hoursUntil < cancelHours;
    }

    // Send notification to coach
    if (twilioSid && twilioAuth && twilioFrom && coachPhone) {
      const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`;
      const authHeader = "Basic " + btoa(`${twilioSid}:${twilioAuth}`);

      const lateTag = isLateCancel ? " \u26a0 LATE CANCEL (within " + cancelHours + "hr policy \u2014 CHARGE)" : "";
      const coachMsg = `Cancellation: ${clientName || "Client"} cancelled their ${type || "session"} on ${date} at ${formatTime(time)}.${lateTag}${reason ? " Reason: " + reason : ""}`;

      await fetch(twilioUrl, {
        method: "POST",
        headers: { Authorization: authHeader, "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ To: coachPhone, From: twilioFrom, Body: coachMsg }).toString(),
      });
    }

    return new Response(
      JSON.stringify({ success: true, lateCancel: isLateCancel, cancelHours }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function formatTime(t: string): string {
  if (!t) return "TBD";
  const [hr, min] = t.split(":");
  const h = parseInt(hr);
  const ap = h >= 12 ? "PM" : "AM";
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${h12}:${min} ${ap}`;
}
