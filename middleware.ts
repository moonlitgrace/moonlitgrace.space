import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from './app/_lib/session';

export default async function middleware(request: NextRequest) {
  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  const { pathname } = request.nextUrl;
  const LOGIN_URl = '/admin/login';

  if (session && pathname === LOGIN_URl) {
    return NextResponse.redirect(new URL('/admin', request.nextUrl));
  } else if (!session && pathname !== LOGIN_URl) {
    return NextResponse.redirect(new URL(LOGIN_URl, request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
