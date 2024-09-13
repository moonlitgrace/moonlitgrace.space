import MoonlitGraceArt from '@/app/_components/_main/moonlitgrace-art';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moonlitgrace',
  description:
    'Step into Moonlitgrace, where a passionate web developer and open-source contributor shares insights, projects, and creativity—all under the alias Moonlitgrace.',
};

export default function Home() {
  return (
    <main className="grid w-full place-items-center">
      <MoonlitGraceArt />
    </main>
  );
}
