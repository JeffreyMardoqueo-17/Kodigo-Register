import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const bootcampsFilePath = path.resolve('./src/data/bootcamps.json');

// Define el tipo para el bootcamp
interface Bootcamp {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    active: boolean;
}

// Función para leer los bootcamps desde el archivo JSON
const readBootcampsFromFile = (): Bootcamp[] => {
    const data = fs.readFileSync(bootcampsFilePath, 'utf-8');
    return JSON.parse(data);
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const bootcamps = readBootcampsFromFile();
        const activeBootcamps = bootcamps.filter((bootcamp) => bootcamp.active);
        res.status(200).json(activeBootcamps);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
