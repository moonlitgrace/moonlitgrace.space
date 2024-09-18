import { validateFile } from '@/lib/utils';
import { AdminBlogFormState, AdminBlogSchema } from '@/zod_schemas/admin';

export default async function adminBlogSubmit(state: AdminBlogFormState, formData: FormData) {
  const isDraft = formData.get('is_draft') === 'true';

  const rawData = {
    id: formData.get('id') ? Number(formData.get('id')) : undefined,
    title: formData.get('title') as string,
    tag: formData.get('tag') as string,
    content: formData.get('content') as string,
    is_draft: isDraft,
  };

  let dataToSend: any = rawData;
  if (!isDraft) {
    const validatedFields = AdminBlogSchema.safeParse(rawData);
    if (!validatedFields.success) {
      console.log(validatedFields.error);
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
    dataToSend = { ...validatedFields.data, is_draft: isDraft };
  }

  try {
    const coverImage = formData.get('cover') as File;
    if (coverImage && validateFile(coverImage)) {
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
      dataToSend.cover = data.url;
    }

    const res = await fetch('/api/blog', {
      method: 'POST',
      body: JSON.stringify(dataToSend),
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
    console.error('API call failed:', err);
    return { message: 'API call failed' };
  }
}
