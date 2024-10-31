"use client"

import localFont from 'next/font/local';
import './globals.css';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const publicRoutes = ['/', '/login', '/register'];

    if (!token && pathname && !publicRoutes.includes(pathname)) {
      router.replace('/login');
    }
  }, [pathname, router]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
      
        {children}
      </body>
    </html>
  );
}
