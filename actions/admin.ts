import { AdminBlogFormState, AdminBlogSchema } from "@/zod_schemas/admin";

export default async function adminBlogSubmit(state: AdminBlogFormState, formData: FormData) {
  const validatedFields = AdminBlogSchema.safeParse({
    update: formData.get('update') === 'on',
    title: formData.get('title'),
    tag: formData.get('tag'),
    content: formData.get('content'),
  })

  console.log(validatedFields.data)

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  await new Promise(resolve => setTimeout(() => {
    console.log('Done');
    resolve('donw');
  }, 2000));
}
