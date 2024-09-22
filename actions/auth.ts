'use server';

import { createSession } from '@/app/_lib/session';
import { AuthFormState, AuthSchema } from '@/zod_schemas/auth';
import { redirect } from 'next/navigation';

export async function login(_state: AuthFormState, formData: FormData) {
  const { success, data, error } = AuthSchema.safeParse({
    username: formData.get('username'),
    password: formData.get('password'),
  });

  if (!success) {
    return {
      errors: error.flatten().fieldErrors,
    };
  }

  if (data.username !== process.env.ADMIN_USERNAME) {
    return {
      errors: { username: ['Invalid username'] },
    };
  } else if (data.password !== process.env.ADMIN_PASSWORD) {
    return {
      errors: { password: ['Invalid password'] },
    };
  }

  // Create session if credentials are valid
  await createSession(data.username);
  redirect('/admin');
}
