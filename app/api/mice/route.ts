import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { firstName, lastName, cargo, company, email, phone, servicos, message } = body;

  if (!firstName || !lastName || !cargo || !company || !email || !phone) {
    return NextResponse.json({ error: "Campos obrigatórios em falta." }, { status: 400 });
  }

  const servicosList = Array.isArray(servicos) && servicos.length > 0
    ? servicos.join(", ")
    : "Nenhum selecionado";

  const { error } = await resend.emails.send({
    from: "Singularis Travel <onboarding@resend.dev>",
    to: "bernardo.barbosa@singularis.tur.br",
    subject: `[MICE] ${company} — ${firstName} ${lastName}`,
    text: [
      `Nome: ${firstName} ${lastName}`,
      `Cargo: ${cargo}`,
      `Empresa: ${company}`,
      `Email: ${email}`,
      `Telefone: ${phone}`,
      `Serviços: ${servicosList}`,
      message ? `\nMensagem:\n${message}` : "",
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: "Erro ao enviar email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
