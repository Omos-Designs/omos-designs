import { NextResponse } from "next/server"
import { Resend } from "resend"

// (Optional) force Node runtime
export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => null)
    if (!data) {
      return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.EMAIL_TO
    const from = process.env.EMAIL_FROM // must be a verified sender/domain in Resend

    if (!apiKey || !to || !from) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Server email not configured (missing RESEND_API_KEY, EMAIL_TO, or EMAIL_FROM). Check .env.local and restart dev server.",
        },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const { name, email, company, projectType, message } = data
    if (!email) {
      return NextResponse.json({ ok: false, error: "Please include your email" }, { status: 400 })
    }
    if (!name) {
      return NextResponse.json({ ok: false, error: "Please include your name" }, { status: 400 })
    }
    if (projectType === "") {
      return NextResponse.json({ ok: false, error: "Please select a project type (Just click `Not sure yet` if that's the case)" }, { status: 400 })
    }

    const subject = `[Omos Designs] New inquiry from ${name}`
    const html = `
      <h2>New Contact Inquiry</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Company:</b> ${company || "-"}</p>
      <p><b>Project Type:</b> ${projectType || "-"}</p>
      <hr/>
      <p style="white-space:pre-wrap">${message}</p>
    `

    const result = await resend.emails.send({
      from: `Omos Designs | Contact Form Submission | <${from}>`, // nice display name + must be verified
      to,
      subject,
      html,
      replyTo: email,
    })

    if (result.error) {
      console.error("Resend error:", result.error)
      // include provider error message to debug
      return NextResponse.json(
        { ok: false, error: `Resend: ${result.error.message || String(result.error)}` },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error("Route error:", err)
    return NextResponse.json(
      { ok: false, error: err?.message || "Unexpected server error" },
      { status: 500 }
    )
  }
}
