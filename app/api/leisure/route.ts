import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, phone, subject, message } = body;

  if (!firstName || !lastName || !email || !phone || !subject) {
    return NextResponse.json({ error: "Campos obrigatórios em falta." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Singularis Travel <onboarding@resend.dev>",
    to: "bernardo.barbosa@singularis.tur.br",
    subject: `[Lazer de Luxo] ${subject} — ${firstName} ${lastName}`,
    text: [
      `Nome: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Telefone: ${phone}`,
      `Interesse: ${subject}`,
      message ? `\nMensagem:\n${message}` : "",
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: "Erro ao enviar email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
