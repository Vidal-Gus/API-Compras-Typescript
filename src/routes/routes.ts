import { Router } from "express";
import { Request, Response } from "express";
import registrarUsuario from "../controllers/registro";
import { logarUsuario } from "../controllers/login";
import { verificarUsuarioLogado } from "../middlewares/verificarLogin";
const routes = Router();

routes.post('/registro', registrarUsuario)
routes.post('/login', logarUsuario)
routes.use(verificarUsuarioLogado);

routes.get('/teste', (req: Request, res: Response) => {
    console.log(req.body.user);

    return res.json({ mensagem: "Teste de rota" })
})

export default routes