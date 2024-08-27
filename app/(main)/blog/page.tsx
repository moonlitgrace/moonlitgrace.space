import BlogListView from '@/views/blog-list-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Moonlitgrace',
  description: 'Dive into the Blog at Moonlitgrace, where a passionate web developer and open-source contributor shares thoughts, tutorials, and insights—all under the alias Moonlitgrace.',
};

export default async function BlogPage() {
  return <BlogListView title='Blog' linkPrefix='/blog/' />
}
