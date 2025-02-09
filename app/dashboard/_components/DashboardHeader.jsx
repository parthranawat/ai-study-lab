'use client';
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function DashboardHeader() {
  const path = usePathname();
  return (
    <div className="p-5 shadow-md flex justify-end">
      <div className="flex items-center gap-3">
        <UserButton />
        <Link href={'/dashboard'}>
          <Button>Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}

export default DashboardHeader;
