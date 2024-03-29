import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fle h-full items-center justify-center bg-black">
      {children}
    </div>
  );
}
