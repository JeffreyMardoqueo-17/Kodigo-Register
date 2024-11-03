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

const readBootcampsFromFile = (): Bootcamp[] => JSON.parse(fs.readFileSync(bootcampsFilePath, 'utf-8'));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === 'GET') {
        const bootcamps = readBootcampsFromFile();
        const bootcamp = bootcamps.find((bootcamp: Bootcamp) => bootcamp.id === parseInt(id as string, 10));

        if (!bootcamp) {
            return res.status(404).json({ message: 'Bootcamp no encontrado' });
        }

        return res.status(200).json(bootcamp);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
