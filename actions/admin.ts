import { AdminBlogFormState, AdminBlogSchema } from '@/zod_schemas/admin';

export default async function adminBlogSubmit(state: AdminBlogFormState, formData: FormData) {
  console.log(state);

  const validatedFields = AdminBlogSchema.safeParse({
    id: formData.get('id') ? Number(formData.get('id')) : undefined,
    title: formData.get('title'),
    tag: formData.get('tag'),
    content: formData.get('content'),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await fetch('/api/blog', {
      method: 'POST',
      body: JSON.stringify(validatedFields.data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      const err = await res.json();
      return { message: err };
    }

    return { message: 'success' };
  } catch (err) {
    console.error(err);
    return { message: 'API call failed' };
  }
}
