
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const bootcampsFilePath = path.resolve('./src/data/bootcamps.json');

const readBootcampsFromFile = () => JSON.parse(fs.readFileSync(bootcampsFilePath, 'utf-8'));
const saveBootcampsToFile = (bootcamps: any) => fs.writeFileSync(bootcampsFilePath, JSON.stringify(bootcamps, null, 2));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        const { id, name, description, technologies } = req.body;

        if (!id || !name || !description || !technologies || !Array.isArray(technologies)) {
            return res.status(400).json({ message: 'Todos los campos son requeridos y technologies debe ser un arreglo' });
        }

        const bootcamps = readBootcampsFromFile();
        const bootcampIndex = bootcamps.findIndex((bootcamp: any) => bootcamp.id === id);

        if (bootcampIndex === -1) {
            return res.status(404).json({ message: 'Bootcamp no encontrado' });
        }

        bootcamps[bootcampIndex] = { id, name, description, technologies, active: true };
        saveBootcampsToFile(bootcamps);

        res.status(200).json({ message: 'Bootcamp actualizado correctamente', bootcamp: bootcamps[bootcampIndex] });
    } else {
        res.setHeader('Allow', ['PUT']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
