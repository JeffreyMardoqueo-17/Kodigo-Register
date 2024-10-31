// src/app/dashboard/create.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import withAuth from '@/utils/withAuth';

function CreateBootcampPage() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const techArray = technologies.split(',').map(tech => tech.trim());

        try {
            const response = await fetch('/api/auth/bootcamps/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, description, technologies: techArray }),
            });

            if (!response.ok) throw new Error('Error al crear el bootcamp');

            alert('Bootcamp creado correctamente');
            router.push('/bootcamp');
        } catch (err) {
            setError('Error al crear el bootcamp');
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-purple-600 via-purple-800 to-indigo-900 p-8">
            <h1 className="text-4xl font-bold mb-8 text-white">Crear Nuevo Bootcamp</h1>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mb-6 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-purple-600 text-gray-800 font-semibold"
                />
                <textarea
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full mb-6 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-purple-600 text-gray-800 font-semibold"
                />
                <input
                    type="text"
                    placeholder="Tecnologías (separadas por comas)"
                    value={technologies}
                    onChange={(e) => setTechnologies(e.target.value)}
                    className="w-full mb-6 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-purple-600 text-gray-800 font-semibold"
                />
                <button
                    type="submit"
                    className="w-full bg-purple-700 text-white py-3 rounded font-bold hover:bg-purple-800 transition duration-300"
                >
                    Crear Bootcamp
                </button>
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </form>
        </div>
    );
}

export default withAuth(CreateBootcampPage);
