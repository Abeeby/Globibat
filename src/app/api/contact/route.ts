import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

// Interface pour les données du formulaire
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  service: string;
  message?: string;
}

// Fonction pour valider l'email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Fonction pour valider le numéro de téléphone (optionnel)
function isValidPhone(phone: string): boolean {
  if (!phone) return true; // Le téléphone est optionnel
  const phoneRegex = /^(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/;
  return phoneRegex.test(phone);
}

// Configuration de transport pour nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER || 'smtp.example.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || 'user@example.com',
    pass: process.env.EMAIL_PASSWORD || 'password',
  },
});

// Fonction pour envoyer un email
async function sendEmail(to: string, subject: string, html: string) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || '"Globibat Website" <noreply@globibat.com>',
      to,
      subject,
      html,
    });
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Récupérer les données du formulaire
    const formData: ContactFormData = await request.json();
    
    // Valider les données requises
    if (!formData.name || !formData.name.trim()) {
      return NextResponse.json(
        { success: false, message: 'Le nom est requis' },
        { status: 400 }
      );
    }
    
    if (!formData.email || !formData.email.trim() || !isValidEmail(formData.email)) {
      return NextResponse.json(
        { success: false, message: 'Un email valide est requis' },
        { status: 400 }
      );
    }
    
    if (formData.phone && !isValidPhone(formData.phone)) {
      return NextResponse.json(
        { success: false, message: 'Le numéro de téléphone n\'est pas valide' },
        { status: 400 }
      );
    }
    
    if (!formData.service) {
      return NextResponse.json(
        { success: false, message: 'Veuillez sélectionner un service' },
        { status: 400 }
      );
    }
    
    // Création du contenu de l'email
    const emailHtml = `
      <h1>Nouvelle demande de contact - ${formData.service}</h1>
      <p><strong>Nom:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Téléphone:</strong> ${formData.phone || 'Non renseigné'}</p>
      <p><strong>Adresse:</strong> ${formData.address || 'Non renseignée'}</p>
      <p><strong>Service:</strong> ${formData.service}</p>
      <p><strong>Message:</strong> ${formData.message || 'Aucun message'}</p>
    `;
    
    // Envoi de l'email
    try {
      // Adresse email de destination
      const toEmail = 'info@globibat.com';
      
      // Envoi de l'email
      const emailSent = await sendEmail(
        toEmail,
        `Nouvelle demande de devis - ${formData.service}`,
        emailHtml
      );
      
      if (!emailSent) {
        throw new Error('Échec de l\'envoi de l\'email');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      
      // En mode développement, on continue même si l'email ne peut pas être envoyé
      if (process.env.NODE_ENV !== 'development') {
        throw error;
      }
    }
    
    // Retourner une réponse de succès
    return NextResponse.json(
      { 
        success: true, 
        message: 'Votre message a été envoyé avec succès. Nous vous contacterons dans les plus brefs délais.' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Erreur lors du traitement du formulaire de contact:', error);
    
    // Retourner une réponse d'erreur
    return NextResponse.json(
      { 
        success: false, 
        message: 'Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.' 
      },
      { status: 500 }
    );
  }
} 