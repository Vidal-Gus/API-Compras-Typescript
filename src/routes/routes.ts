import { Router } from "express";
import { Request, Response } from "express";
const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    res.status(200).send('Chegou até a rota!');
})


export = routes