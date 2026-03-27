import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactSchema } from "@/schemas/contactSchema";


export async function POST(request: Request) {
  try {
    const body = await request.json();

     const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    console.log("Send",result.data)
    // 1. Configuração do Transporter (ex: Gmail, Outlook, Resend, etc.)
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587, // Ou use host/port para outros serviços
      secure: false,
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS, // Dica: Use "Senhas de App" se for Gmail
      },
    });
// 'mmmbempreendimentos351@gmail.com'
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `Site MMB: ${subject}`,
      text: message,
      html: `
        <h3>Novo Contato</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    };

    // 3. Disparo do e-mail
    const res = await transporter.sendMail(mailOptions);
    console.log("Send Email", res)
    return NextResponse.json({ message: 'E-mail enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json({ error: 'Falha ao enviar e-mail.' }, { status: 500 });
  }
}