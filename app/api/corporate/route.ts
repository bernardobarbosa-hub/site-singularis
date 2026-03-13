import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { firstName, lastName, company, email, phone, produtos, message } = body;

  if (!firstName || !lastName || !company || !email || !phone) {
    return NextResponse.json({ error: "Campos obrigatórios em falta." }, { status: 400 });
  }

  const produtosList = Array.isArray(produtos) && produtos.length > 0
    ? produtos.join(", ")
    : "Nenhum selecionado";

  const { error } = await resend.emails.send({
    from: "Singularis Travel <onboarding@resend.dev>",
    to: "bernardo.barbosa@singularis.tur.br",
    subject: `[Corporate] ${company} — ${firstName} ${lastName}`,
    text: [
      `Nome: ${firstName} ${lastName}`,
      `Empresa: ${company}`,
      `Email: ${email}`,
      `Telefone: ${phone}`,
      `Produtos de interesse: ${produtosList}`,
      message ? `\nMensagem:\n${message}` : "",
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: "Erro ao enviar email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
