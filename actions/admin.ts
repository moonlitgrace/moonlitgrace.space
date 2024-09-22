import { validateFile } from '@/lib/utils';
import { AdminBlogFormState, AdminBlogSchema } from '@/zod_schemas/admin';

export default async function adminBlogSubmit(_state: AdminBlogFormState, formData: FormData) {
  const validatedFields = AdminBlogSchema.safeParse({
    id: formData.get('id') ? Number(formData.get('id')) : undefined,
    title: formData.get('title'),
    tag: formData.get('tag'),
    content: formData.get('content'),
    draft: formData.get('draft') === 'on',
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    let coverImage = formData.get('cover') as File;
    // coverImage returns invalid File object if nothing is selected
    if (validateFile(coverImage)) {
      const imageData = new FormData();
      imageData.append('file', coverImage);

      const imgRes = await fetch('/api/cloudinary', {
        method: 'POST',
        body: imageData,
      });

      if (!imgRes.ok) {
        const imgResErr = await imgRes.json();
        console.error('Image upload failed:', imgResErr);
        return { message: imgResErr };
      }

      const data = await imgRes.json();
      validatedFields.data.cover = data.url;
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
