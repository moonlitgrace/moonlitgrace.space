import BlogList from '@/components/shared/blog-list';

export default async function AdminBlogPage() {
  return <BlogList title="Admin Blog" linkPrefix="/admin/blog/" />;
}
