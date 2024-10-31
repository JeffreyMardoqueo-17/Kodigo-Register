import { ReactNode } from 'react';

interface StatsCardProps {
    icon: ReactNode;
    value: string;
    label: string;
}

export default function StatsCard({ icon, value, label }: StatsCardProps) {
    return (
        <div className="flex flex-col items-center text-center text-purple-700">
            <div className="text-4xl mb-2">{icon}</div>
            <h2 className="text-3xl font-bold mb-2">{value}</h2>
            <p className="text-gray-600">{label}</p>
        </div>
    );
}
