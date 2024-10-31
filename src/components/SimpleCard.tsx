'use client';

import { FaTools, FaEye } from 'react-icons/fa';

interface SimpleCardProps {
    id: number;
    name: string;
    description: string;
    technologies: string[];
}

export default function SimpleCard({ name, description, technologies }: SimpleCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow mb-4 max-w-sm w-full text-gray-800 border border-gray-200">
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="text-gray-500 text-sm mb-4 flex items-center">
                <FaTools className="text-indigo-500 mr-2" />
                <span className="font-semibold">Tecnologías:</span> {technologies.join(', ')}
            </div>
        </div>
    );
}
