import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const VALID_TOKENS = [
  'A1B2C3',
  'D4E5F6',
  'G7H8I9',
  'J0K1L2',
  'M3N4O5',
  'P6Q7R8',
  'S9T0U1',
  'V2W3X4',
  'Y5Z6A7',
  'B8C9D0',
]; // Replace with generated tokens
export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');

  if (!token || !VALID_TOKENS.includes(token)) {
    return NextResponse.redirect(new URL('/not-allowed', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|not-allowed|_next/image|favicon.ico|sitemap.xml|robots.txt|assets).*)',
  ],
};
