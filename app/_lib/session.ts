import 'server-only';

import { SignJWT, jwtVerify } from 'jose';
import { env } from '@/lib/env';

const secretKey = env.SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  console.log(payload);

  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);
}

export async function decrypy(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (err) {
    console.error('Failed to verify session: ', err);
  }
}
