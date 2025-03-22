import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['fr', 'en'];
const defaultLocale = 'fr';

// Anciennes URLs à rediriger
const redirects = new Map([
  ['/realisations', '/projets-realises'],
  ['/devis', '/contact'],
  ['/services/demenagement', '/services/demenagement-debarras'],
  ['/services/electricien', '/services/electricite-depannage'],
  ['/services/serrurier', '/services/serrurerie-depannage'],
  ['/services/nettoyage', '/services/nettoyage-conciergerie'],
]);

// Pages qui nécessitent une redirection vers HTTPS
const securePages = new Set([
  '/contact',
  '/devis',
  '/calculateur-volume',
]);

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const locale = matchLocale(languages, locales, defaultLocale);
  
  return locale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Forcer HTTPS sur les pages sécurisées
  if (securePages.has(pathname) && request.headers.get('x-forwarded-proto') !== 'https') {
    return NextResponse.redirect(
      `https://${request.headers.get('host')}${pathname}`,
      301
    );
  }

  // Gérer les redirections d'anciennes URLs
  if (redirects.has(pathname)) {
    return NextResponse.redirect(
      new URL(redirects.get(pathname)!, request.url),
      301
    );
  }

  // Ajouter les en-têtes de sécurité
  const response = NextResponse.next();

  // En-têtes de sécurité
  const securityHeaders = new Headers(response.headers);
  securityHeaders.set('X-DNS-Prefetch-Control', 'on');
  securityHeaders.set('X-Frame-Options', 'SAMEORIGIN');
  securityHeaders.set('X-Content-Type-Options', 'nosniff');
  securityHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  securityHeaders.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );

  // En-tête CSP (Content Security Policy)
  securityHeaders.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.google-analytics.com *.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
      "img-src 'self' data: *.google-analytics.com",
      "font-src 'self' fonts.gstatic.com",
      "connect-src 'self' *.google-analytics.com",
      "frame-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ')
  );

  return new NextResponse(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: securityHeaders,
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /fonts (inside /public)
     * 4. /images (inside /public)
     * 5. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|fonts|images|[\\w-]+\\.\\w+).*)',
  ],
}; 