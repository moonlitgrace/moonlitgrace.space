import IsometricHandler from '@/components/isometric-handler';
import { Metadata } from 'next';
import MoonlitgraceSvg from '@/assets/svgs/moonlitgrace.svg';

export const metadata: Metadata = {
  title: 'Moonlitgrace',
  description:
    'Step into Moonlitgrace, where a passionate web developer and open-source contributor shares insights, projects, and creativity—all under the alias Moonlitgrace.',
  openGraph: {
    title: 'Moonlitgrace',
    description:
      'Step into Moonlitgrace, where a passionate web developer and open-source contributor shares insights, projects, and creativity—all under the alias Moonlitgrace.',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'Moonlitgrace',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="grid w-full place-items-center">
      <IsometricHandler svg={<MoonlitgraceSvg />} />
    </main>
  );
}
