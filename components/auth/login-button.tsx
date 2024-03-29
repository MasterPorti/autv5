'use client';

import { useRouter } from 'next/navigation';

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChil?: boolean;
}

export const LoginButton = ({
  children,
  asChil,
  mode = 'redirect',
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push('/auth/login');
  };

  if (mode === 'modal') return <span>TODO IMPLEMENT MODAL</span>;

  return <span onClick={() => onClick()}>{children}</span>;
};
