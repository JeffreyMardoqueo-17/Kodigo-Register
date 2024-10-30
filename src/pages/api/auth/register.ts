import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';

const usersFilePath = path.resolve('./src/data/users.json');

//  para leer usuarios desde el archivo JSON
const readUsersFromFile = () => {
    const data = fs.readFileSync(usersFilePath, 'utf-8');
    return JSON.parse(data);
};

//  para guardar usuarios en el archivo JSON
const saveUsersToFile = (users: any) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        // Leer usuarios existentes
        const users = readUsersFromFile();

        // Verificar si el usuario ya existe
        const userExists = users.find((user: any) => user.username === username);
        if (userExists) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el nuevo usuario
        const newUser = { id: users.length + 1, username, password: hashedPassword };
        users.push(newUser);

        // Guardar usuarios en el archivo
        saveUsersToFile(users);

        res.status(201).json({ message: 'Usuario registrado correctamente' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
