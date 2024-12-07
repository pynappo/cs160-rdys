import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import * as React from "react";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { ScanLink } from "@/components/ui/scan-link";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EcoSort",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="flex flex-row items-center justify-between gap-4 p-2">
            <Link href="/" legacyBehavior passHref>
             EcoSort
            </Link>
            <NavigationMenu>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
              <SignedIn>
                <Link href="/scan" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Scan
                  </NavigationMenuLink>
                </Link>
              </SignedIn>
              <SignedOut>
                <ScanLink />
              </SignedOut>
              <Link href="/resources" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Resources
                </NavigationMenuLink>
              </Link>
            </NavigationMenu>
            <div className="login-register flex flex-row gap-2">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          {children}
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
