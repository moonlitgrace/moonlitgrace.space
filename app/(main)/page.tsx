import MoonlitGraceArt from '@/components/main/moonlitgrace-art';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home.space',
  description: 'a graceful space',
};

export default function Home() {
  return (
    <main className="grid w-full place-items-center">
      <MoonlitGraceArt />
    </main>
  );
}

