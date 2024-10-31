'use client';

import { login } from '@/actions/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useActionState } from 'react';

export function AuthForm() {
  const [state, action, isPending] = useActionState(login, undefined);

  return (
    <form action={action} className="flex flex-col gap-2">
      <div className="flex items-start gap-3">
        <div className="flex w-full flex-col gap-1.5">
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" name="username" placeholder="Enter username..." />
          <p className="text-sm text-muted-foreground">{state?.errors.username}</p>
        </div>
        <div className="flex w-full flex-col gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" placeholder="Enter password..." />
          <p className="text-sm text-muted-foreground">{state?.errors.password}</p>
        </div>
      </div>
      <Button disabled={isPending}>{isPending ? 'Loging in' : 'Log in'}</Button>
    </form>
  );
}
