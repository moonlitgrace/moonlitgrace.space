import { AuthForm } from '@/app/_components/_admin/_login/auth-form';

export default async function LoginPage() {
  return (
    <>
      <h2 className="text-3xl font-bold">
        Login
        <span className="text-primary">.</span>
      </h2>
      <AuthForm />
    </>
  );
}
