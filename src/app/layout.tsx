"use client";
import type { Metadata } from 'next';
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
    // Verificar si el token existe en localStorage
    const token = localStorage.getItem('token');

    // Definir las rutas públicas (sin necesidad de autenticación)
    const publicRoutes = ['/', '/login', '/register'];

    // Redirigir al login si intenta acceder a rutas protegidas sin token
    if (!token && pathname && !publicRoutes.includes(pathname)) {
      router.replace('/login');
    }
  }, [pathname, router]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
