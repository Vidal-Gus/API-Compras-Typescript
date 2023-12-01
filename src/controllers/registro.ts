import { Request, Response } from "express";
import objKnex from "../config/conexaoBD";

interface Body {
    nome: string,
    email: string,
    senha: string
}

const registrarUsuario = async (req: Request, res: Response): Promise<{}> => {
    const { nome, email, senha }: Body = req.body;
    try {
        const consulta: object[] = await objKnex('compras')
        console.log('teste')
        return res.status(200).json({ mensagem: "Testando Knex", nome, email, senha, consulta })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "Erro no servidor" })
    }
};

export = registrarUsuario;