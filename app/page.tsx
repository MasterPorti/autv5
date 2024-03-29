import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';

const fonts = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

export default function page() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-black">
      <div className="space-y-6">
        <h1
          className={cn(
            'text-6xl font-semibold text-white drop-shadow-md',
            fonts.className,
          )}
        >
          Auth 🔐
        </h1>
        <p className="justify-center text-white">
          A simple authentication service
        </p>
        <div>
          <LoginButton>
            <Button variant={'secondary'} size={'lg'}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
