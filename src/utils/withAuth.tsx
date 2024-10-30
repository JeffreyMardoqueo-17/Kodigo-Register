
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent: React.ComponentType) => {
    return (props: any) => {
        const router = useRouter();

        useEffect(() => {
            const token = localStorage.getItem('token');

            if (!token) {
                router.replace('/login');
            }
        }, [router]);

        // Si hay un token, renderizar el componente protegido
        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
