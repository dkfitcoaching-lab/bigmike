import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { phone, name, date, time, type } = await req.json();

    if (!phone || !name || !date || !time) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const twilioSid = Deno.env.get("TWILIO_ACCOUNT_SID");
    const twilioAuth = Deno.env.get("TWILIO_AUTH_TOKEN");
    const twilioFrom = Deno.env.get("TWILIO_PHONE_NUMBER");
    const coachPhone = Deno.env.get("COACH_PHONE");

    if (!twilioSid || !twilioAuth || !twilioFrom) {
      return new Response(
        JSON.stringify({ error: "Twilio credentials not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`;
    const authHeader = "Basic " + btoa(`${twilioSid}:${twilioAuth}`);

    const results: { target: string; status: string; sid?: string; error?: string }[] = [];

    // Send confirmation to client
    const clientMsg = `You're booked with Big Mike Ely \u2014 ${type || "Session"} on ${date} at ${time}. See you there!`;
    const clientRes = await fetch(twilioUrl, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ To: phone, From: twilioFrom, Body: clientMsg }).toString(),
    });
    const clientResult = await clientRes.json();
    results.push({
      target: "client",
      status: clientRes.ok ? "sent" : "failed",
      sid: clientResult.sid,
      error: clientRes.ok ? undefined : clientResult.message,
    });

    // Send notification to coach
    if (coachPhone) {
      const coachMsg = `New booking: ${name} \u2014 ${type || "Session"} on ${date} at ${time}`;
      const coachRes = await fetch(twilioUrl, {
        method: "POST",
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ To: coachPhone, From: twilioFrom, Body: coachMsg }).toString(),
      });
      const coachResult = await coachRes.json();
      results.push({
        target: "coach",
        status: coachRes.ok ? "sent" : "failed",
        sid: coachResult.sid,
        error: coachRes.ok ? undefined : coachResult.message,
      });
    }

    return new Response(
      JSON.stringify({ success: true, results }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
