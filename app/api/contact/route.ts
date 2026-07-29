import { NextRequest, NextResponse } from "next/server";

// TODO: This currently just validates and logs the message. Wire it up to a
// real provider before deploying — the two easiest options:
//   1. Resend (https://resend.com) — a few lines with their SDK.
//   2. Formspree (https://formspree.io) — skip this route entirely and point
//      the form's `action` at your Formspree endpoint instead.
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Placeholder — replace with actual email sending.
    console.log("New contact form submission:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
