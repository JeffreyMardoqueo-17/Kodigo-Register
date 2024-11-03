'use client';

import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
import SimpleCard from '@/components/SimpleCard';

interface Bootcamp {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    active: boolean;
}

const BootcampsPage = () => {
    const [bootcamps, setBootcamps] = useState<Bootcamp[]>([]);
    const [error, setError] = useState('');
    // const router = useRouter();

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
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Nuestros Bootcamps</h2>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {bootcamps.map((bootcamp) => (
                        <SimpleCard
                            key={bootcamp.id}
                            id={bootcamp.id}
                            name={bootcamp.name}
                            description={bootcamp.description}
                            technologies={bootcamp.technologies}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BootcampsPage;
