import { serve } from "https://deno.land/std@0.177.0/http/server.ts"

serve(async (req) => {
  const { to, message } = await req.json()
  const sid = Deno.env.get("TWILIO_ACCOUNT_SID")!
  const token = Deno.env.get("TWILIO_AUTH_TOKEN")!
  const from = Deno.env.get("TWILIO_PHONE_NUMBER")!

  const res = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(`${sid}:${token}`),
      },
      body: new URLSearchParams({ To: to, From: from, Body: message }),
    }
  )

  const data = await res.json()
  if (data.error_code) return new Response(JSON.stringify({ error: data.message }), { status: 400 })
  return new Response(JSON.stringify({ success: true, sid: data.sid }))
})
