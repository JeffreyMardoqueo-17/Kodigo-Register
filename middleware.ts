import { NextRequest, NextResponse } from 'next/server';

const publicRoutes = ['/', '/login', '/register'];

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    const cookies = req.headers.get('cookie');
    const token = cookies?.split('; ').find(cookie => cookie.startsWith('token='))?.split('=')[1];

    // console.log('Token en middleware:', token); // 

    if (!token) {
        // Redirigir al login si no hay token
        const loginUrl = new URL('/login', req.url);
        return NextResponse.redirect(loginUrl);
    }

    // Permitir el acceso a la ruta si el token existe
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/dashboard'],
};
