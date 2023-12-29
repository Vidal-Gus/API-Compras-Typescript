import { Router } from "express";
import { Request, Response } from "express";
import registrarUsuario from "../controllers/registro";
import { logarUsuario } from "../controllers/login";
import { verificarUsuarioLogado } from "../middlewares/verificarLogin";
import { adicionarProdutoUsuario } from "../controllers/operacoesUsuario";
const routes = Router()

routes.post('/registro', registrarUsuario)
routes.post('/login', logarUsuario)

routes.use(verificarUsuarioLogado)

routes.post('/adicionarProduto', adicionarProdutoUsuario)

export default routes