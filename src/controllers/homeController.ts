import {Request, Response} from 'express';

export async function home(req: Request, res: Response) {
    res.send('Hello World!');
}