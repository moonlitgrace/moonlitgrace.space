'use server';

import { revalidatePath } from 'next/cache';

export async function revalidatePathClient(path?: string) {
  try {
    if (path) {
      revalidatePath(path);
    } else {
      revalidatePath('/', 'layout');
    }
  } catch (err) {
    console.log('Error on revalidating: ', err);
  }
}
