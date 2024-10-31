
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import withAuth from '@/utils/withAuth';

interface Bootcamp {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    active: boolean;
}

function BootcampDetailPage() {
    const [bootcamp, setBootcamp] = useState<Bootcamp | null>(null);
    const [error, setError] = useState('');
    const router = useRouter();
    const params = useParams();
    const id = params ? params.id : null;

    useEffect(() => {
        const fetchBootcampDetails = async () => {
            try {
                const response = await fetch(`/api/auth/bootcamps/${id}`);
                if (!response.ok) throw new Error('Error al obtener los detalles del bootcamp');
                const data = await response.json();
                setBootcamp(data);
            } catch (err) {
                setError('Hubo un problema al cargar los detalles del bootcamp.');
                console.error(err);
            }
        };

        fetchBootcampDetails();
    }, [id]);

    if (error) return <p className="text-red-500 text-center mt-4">{error}</p>;

    if (!bootcamp) return <p className="text-center mt-4">Cargando detalles...</p>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-800 to-indigo-900 p-8 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{bootcamp.name}</h2>
                <p className="text-gray-700 mb-4">{bootcamp.description}</p>
                <div className="mb-4">
                    <span className="font-semibold text-gray-600">Tecnologías: </span>
                    <span className="text-gray-800">{bootcamp.technologies.join(', ')}</span>
                </div>
                <button
                    onClick={() => router.back()}
                    className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
                >
                    Volver
                </button>
            </div>
        </div>
    );
}

export default withAuth(BootcampDetailPage);