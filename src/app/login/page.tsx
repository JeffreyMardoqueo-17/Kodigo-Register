'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();

            if (response.ok) {
                // Guardar el token en localStorage
                localStorage.setItem('token', data.token);
                // Redirigir al dashboard si el login es exitoso
                router.push('/dashboard');
            } else {
                setError(data.message || 'Error al iniciar sesión');
            }
        } catch (err) {
            setError('Error al iniciar sesión');
        }
    };

    const handleRegister = () => {
        router.push('/register');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-purple-800 to-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="text-center mb-6">
                    <img
                        src="https://academy.kodigo.org/pluginfile.php/1/theme_moove/logo/1717596360/logo.png"
                        alt="Kodigo Logo"
                        className="w-32 mx-auto mb-4"
                    />
                    <h2 className="text-3xl font-bold text-gray-800">Iniciar Sesión</h2>
                    <p className="text-gray-500">Bienvenido, inicia sesión en tu cuenta</p>
                </div>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 text-gray-600"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 text-gray-700"
                    />
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
                    >
                        Acceder
                    </button>
                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-600">¿No tienes una cuenta?</p>
                    <button
                        onClick={handleRegister}
                        className="text-purple-600 hover:underline mt-2"
                    >
                        Registrarse
                    </button>
                </div>
            </div>
        </div>
    );
}
