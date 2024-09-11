import { AdminBlogFormState, AdminBlogSchema } from '@/zod_schemas/admin';

export default async function adminBlogSubmit(state: AdminBlogFormState, formData: FormData) {
  console.log(state, formData.get('cover'));

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
    let coverImage = formData.get('cover');
    if (coverImage) {
      const imageData = new FormData();
      imageData.append('file', coverImage);

      const ImgRes = await fetch('/api/cloudinary', {
        method: 'POST',
        body: imageData,
      });
      if (!ImgRes.ok) {
        const imgErr = await ImgRes.json();
        console.error('Image upload failed:', imgErr);
        return { message: 'Image upload failed', error: imgErr };
      }

      const output = await ImgRes.json();
      console.log(output);
    }
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
