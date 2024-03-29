'use client';

import Link from 'next/link';
import { Button } from '../ui/button';

interface BackbuttonProps {
  label: string;
  href: string;
}

export default function Backbutton({ href, label }: BackbuttonProps) {
  return (
    <Button variant={'link'} className="w-full font-normal" size={'sm'} asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
