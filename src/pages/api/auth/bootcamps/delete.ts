import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const bootcampsFilePath = path.resolve('./src/data/bootcamps.json');

interface Bootcamp {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    active: boolean;
}

// Función para leer y guardar bootcamps
const readBootcampsFromFile = (): Bootcamp[] => JSON.parse(fs.readFileSync(bootcampsFilePath, 'utf-8'));
const saveBootcampsToFile = (bootcamps: Bootcamp[]) => fs.writeFileSync(bootcampsFilePath, JSON.stringify(bootcamps, null, 2));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        const { id } = req.body;

        const bootcamps = readBootcampsFromFile();
        const bootcampIndex = bootcamps.findIndex((bootcamp: Bootcamp) => bootcamp.id === id);

        if (bootcampIndex === -1) {
            return res.status(404).json({ message: 'Bootcamp no encontrado' });
        }

        bootcamps[bootcampIndex].active = false;
        saveBootcampsToFile(bootcamps);

        res.status(200).json({ message: 'Bootcamp desactivado correctamente', bootcamp: bootcamps[bootcampIndex] });
    } else {
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
