'use client';

import { useState } from 'react';
import { FaEllipsisV, FaEdit, FaEye, FaTrashAlt, FaTools } from 'react-icons/fa';

interface CardProps {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    onDetailsClick: () => void;
    onEditClick: () => void;
    onDeleteClick: () => void;
}

export default function Card({ name, description, technologies, onDetailsClick, onEditClick, onDeleteClick }: CardProps) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow mb-4 max-w-sm w-full text-gray-800 border border-gray-200">
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="text-gray-500 text-sm mb-4 flex items-center">
                <FaTools className="text-indigo-500 mr-2" />
                <span className="font-semibold">Tecnologías:</span> {technologies.join(', ')}
            </div>
            <button
                onClick={onDetailsClick}
                className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-200 flex items-center justify-center gap-2 text-sm"
            >
                <FaEye />
                Ver Detalles
            </button>

            {/* Menú de opciones con efecto de vidrio */}
            <div className="absolute top-4 right-4">
                <button onClick={() => setShowMenu(!showMenu)} className="text-gray-500 hover:text-gray-800">
                    <FaEllipsisV />
                </button>
                {showMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-md text-gray-800 borde border-purple-500 rounded-lg shadow-lg z-10 p-2">
                        <button onClick={onDetailsClick} className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100 rounded transition duration-200">
                            <FaEye className="text-indigo-500" />
                            Ver Detalles
                        </button>
                        <button onClick={onEditClick} className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100 rounded transition duration-200">
                            <FaEdit className="text-green-500" />
                            Editar
                        </button>
                        <button onClick={onDeleteClick} className="w-full px-4 py-2 flex items-center gap-2 text-red-500 rounded transition duration-200 ">
                            <FaTrashAlt />
                            Eliminar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
