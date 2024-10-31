// src/app/bootcamp/[id]/edit.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import withAuth from '@/utils/withAuth';

function EditBootcampPage() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [technologies, setTechnologies] = useState('');
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
                setName(data.name);
                setDescription(data.description);
                setTechnologies(data.technologies.join(', '));
            } catch (err) {
                setError('Hubo un problema al cargar los detalles del bootcamp.');
                console.error(err);
            }
        };

        if (id) fetchBootcampDetails();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const techArray = technologies.split(',').map((tech) => tech.trim());

        try {
            const response = await fetch(`/api/auth/bootcamps/update`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, name, description, technologies: techArray }),
            });

            if (!response.ok) throw new Error('Error al actualizar el bootcamp');

            alert('Bootcamp actualizado correctamente');
            router.push('/bootcamp');
        } catch (err) {
            setError('Error al actualizar el bootcamp');
        }
    };

    const handleCancel = () => {
        router.push('/bootcamp');
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-purple-600 via-purple-800 to-indigo-900 p-8">
            <h1 className="text-3xl font-bold mb-8 text-white">Editar Bootcamp</h1>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
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
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="w-full bg-purple-700 text-white py-3 rounded font-bold hover:bg-purple-800 transition duration-300 mr-2"
                    >
                        Guardar cambios
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="w-full bg-gray-300 text-gray-700 py-3 rounded font-bold hover:bg-gray-400 transition duration-300 ml-2"
                    >
                        Cancelar
                    </button>
                </div>
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </form>
        </div>
    );
}

export default withAuth(EditBootcampPage);