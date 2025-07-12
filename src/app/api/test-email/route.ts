import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuration de transport pour nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER || 'smtp.hostinger.com',
  port: parseInt(process.env.EMAIL_PORT || '465'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || 'info@globibat.com',
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function GET() {
  try {
    // Envoi d'un email de test
    const result = await transporter.sendMail({
      from: process.env.EMAIL_FROM || '"Globibat Test" <info@globibat.com>',
      to: 'info@globibat.com',
      subject: 'Test de configuration email',
      html: `
        <h1>Test de configuration email</h1>
        <p>Ce message confirme que la configuration de votre système d'envoi d'emails fonctionne correctement.</p>
        <p>Paramètres utilisés :</p>
        <ul>
          <li>Serveur : ${process.env.EMAIL_SERVER}</li>
          <li>Port : ${process.env.EMAIL_PORT}</li>
          <li>Secure : ${process.env.EMAIL_SECURE}</li>
          <li>Utilisateur : ${process.env.EMAIL_USER}</li>
        </ul>
        <p>Date et heure du test : ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Email de test envoyé avec succès',
      messageId: result.messageId,
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email de test:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Erreur lors de l\'envoi de l\'email de test',
      error: error instanceof Error ? error.message : String(error),
    }, { status: 500 });
  }
} 