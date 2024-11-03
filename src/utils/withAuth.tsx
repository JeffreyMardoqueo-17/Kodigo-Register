'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const WithAuthComponent = (props: P) => {
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

    // Agregar un display name para el componente
    WithAuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return WithAuthComponent;
};

export default withAuth;
