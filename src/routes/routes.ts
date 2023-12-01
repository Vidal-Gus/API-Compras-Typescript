import { Router } from "express";
import { Request, Response } from "express";
import registrarUsuario from "../controllers/registro";
const routes = Router();

routes.post('/registro', registrarUsuario);
routes.get('/', (req: Request, res: Response) => {
    return res.send('Teste de rota');
})

export = routes