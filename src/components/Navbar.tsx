import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-700 to-purple-900 text-white p-4 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="text-3xl font-bold">
                    Kodigo
                </Link>
                <div className="hidden lg:flex space-x-6">
                    <Link href="/bootcamps" className="hover:text-gray-300">
                        Bootcamps
                    </Link>
                    <button
                        onClick={() => window.location.href = '/login'}
                        className="bg-white text-purple-800 font-semibold py-1 px-4 rounded-full flex items-center hover:bg-gray-200 transition duration-200"
                    >
                        Sign In
                    </button>
                </div>
                {/* Mobile Menu Button */}
                <button className="lg:hidden" onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden mt-4 space-y-4 text-center">
                    <Link href="/bootcamps" className="block hover:text-gray-300">
                        Bootcamps
                    </Link>
                    <button
                        onClick={() => window.location.href = '/login'}
                        className="bg-white text-purple-800 font-semibold py-1 px-4 rounded-full flex items-center justify-center hover:bg-gray-200 transition duration-200 w-full"
                    >
                        Sign In
                    </button>
                </div>
            )}
        </nav>
    );
}
