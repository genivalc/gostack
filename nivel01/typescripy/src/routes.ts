import { Request, Response } from "express";
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response)  {
    const user = createUser({
        name: 'Genival',
        email: 'genival@gamil.com',
        password: '123456',
        techs: ['Node.js', 'ReactJs', 'ReactNative',
        { title: 'Java' , experience: 100},],
    });
    
    return response.json({ message: 'Hello World' });
}