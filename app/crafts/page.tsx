import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crafts. | moonlitspace',
  description: 'my graceful crafts',
};

export default async function CraftsPage() {
  return (
    <>
      <h2 className="text-3xl font-bold">
        Crafts<span className="text-primary">.</span>
      </h2>
      <div className="flex flex-col gap-5">
        <span className='text-lg'>No crafts found!</span>
      </div>
    </>
  );
}

