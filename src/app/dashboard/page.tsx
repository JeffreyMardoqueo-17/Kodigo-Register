
'use client';

import withAuth from '@/utils/withAuth';

function DashboardPage() {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login'; // Redirigir al login
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
                <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
                <p className="mb-4">Bienvenido al dashboard</p>
                <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                    Cerrar Sesión
                </button>
            </div>
        </div>
    );
}

// Exportar el componente envuelto en withAuth para protegerlo
export default withAuth(DashboardPage);
