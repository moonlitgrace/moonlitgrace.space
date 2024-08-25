import MoonlitGraceArt from '@/components/MoonlitGraceArt';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home. | moonlitspace',
  description: 'a graceful space',
};

export default function Home() {
  return (
    <main className="grid w-full place-items-center">
      <MoonlitGraceArt />
    </main>
  );
}
