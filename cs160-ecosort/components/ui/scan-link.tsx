'use client';

import React from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

export function ScanLink() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    toast.error("You are not logged in. Please login or register for an account.");
  };

  return (
    <Link href="/scan" legacyBehavior passHref>
      <NavigationMenuLink
        className={navigationMenuTriggerStyle()}
        onClick={handleClick}
      >
        Scan
      </NavigationMenuLink>
    </Link>
  );
}
