'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import withAuth from '@/utils/withAuth';
import Card from '@/components/Card';

interface Bootcamp {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    active: boolean;
}

function DashboardPage() {
    const [bootcamps, setBootcamps] = useState<Bootcamp[]>([]);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    const handleCreateBootcamp = () => {
        router.push('/bootcamp/create');
    };

    const handleDeleteBootcamp = async (id: number) => {
        if (!confirm('¿Estás seguro de que deseas eliminar este bootcamp?')) return;

        try {
            const response = await fetch(`/api/auth/bootcamps/delete`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id }),
            });
            if (!response.ok) throw new Error('Error al eliminar el bootcamp');
            setBootcamps(bootcamps.filter(bootcamp => bootcamp.id !== id));
        } catch (error) {
            console.error(error);
            alert('Hubo un problema al eliminar el bootcamp.');
        }
    };

    useEffect(() => {
        const fetchBootcamps = async () => {
            try {
                const response = await fetch('/api/auth/bootcamps/all');
                if (!response.ok) throw new Error('Error al obtener los bootcamps');
                const data = await response.json();
                setBootcamps(data);
            } catch (err) {
                setError('Hubo un problema al cargar los bootcamps.');
                console.error(err);
            }
        };

        fetchBootcamps();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-800 to-indigo-900 p-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Panel de Control</h2>
                    <p className="text-gray-600 mb-4">Bienvenido al panel de control</p>
                    <div className="flex justify-between gap-4">
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-600 hover:shadow-lg transition duration-200 transform hover:-translate-y-1"
                        >
                            Cerrar Sesión
                        </button>
                        <button
                            onClick={handleCreateBootcamp}
                            className="bg-green-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-green-600 hover:shadow-lg transition duration-200 transform hover:-translate-y-1"
                        >
                            Crear Bootcamp
                        </button>
                    </div>
                </div>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {bootcamps.map((bootcamp) => (
                        <Card
                            key={bootcamp.id}
                            id={bootcamp.id}
                            name={bootcamp.name}
                            description={bootcamp.description}
                            technologies={bootcamp.technologies}
                            onDetailsClick={() => router.push(`/bootcamp/${bootcamp.id}`)}
                            onEditClick={() => router.push(`/bootcamp/${bootcamp.id}/edit`)}
                            onDeleteClick={() => handleDeleteBootcamp(bootcamp.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default withAuth(DashboardPage);
