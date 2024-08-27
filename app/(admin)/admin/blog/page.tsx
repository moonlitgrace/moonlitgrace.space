import BlogListView from '@/views/blog-list-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Admin',
};

export default async function AdminBlogPage() {
  return <BlogListView title='Admin Blog' linkPrefix='/admin/blog/' />
}
