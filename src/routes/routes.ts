import { Router } from "express";
import { Request, Response } from "express";
import registrarUsuario from "../controllers/registro";
import { logarUsuario } from "../controllers/login";
const routes = Router();

routes.post('/registro', registrarUsuario)
routes.post('/login', logarUsuario)
routes.get('/', (req: Request, res: Response) => {
    return res.send('Teste de rota')
})

export default routes