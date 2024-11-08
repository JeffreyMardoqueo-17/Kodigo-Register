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

// Función para leer y guardar bootcamps
const readBootcampsFromFile = (): Bootcamp[] => JSON.parse(fs.readFileSync(bootcampsFilePath, 'utf-8'));
const saveBootcampsToFile = (bootcamps: Bootcamp[]) => fs.writeFileSync(bootcampsFilePath, JSON.stringify(bootcamps, null, 2));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, description, technologies } = req.body;

        // Validación de campos
        if (!name || !description || !technologies || !Array.isArray(technologies)) {
            return res.status(400).json({ message: 'Todos los campos son requeridos y technologies debe ser un arreglo' });
        }

        const bootcamps = readBootcampsFromFile();
        const newBootcamp: Bootcamp = {
            id: bootcamps.length + 1,
            name,
            description,
            technologies,
            active: true
        };

        bootcamps.push(newBootcamp);
        saveBootcampsToFile(bootcamps);

        res.status(201).json({ message: 'Bootcamp creado correctamente', bootcamp: newBootcamp });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
