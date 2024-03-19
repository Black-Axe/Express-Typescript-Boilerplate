import { Request, Response } from 'express'

export async function home(req: Request, res: Response) {
  res.status(200).send('Hello World!')
}
