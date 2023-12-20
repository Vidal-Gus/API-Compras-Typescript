import { Request, Response } from "express";
import { objKnex } from "../config/conexaoBD";
import { UsuarioBanco } from "../types/UsuarioBanco";
import bcrypt from 'bcrypt'

const registrarUsuario = async (req: Request, res: Response): Promise<{}> => {
    const { nome, email, senha }: UsuarioBanco = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: "Nome email e senha precisam ser enviadas" })
    }
    try {
        const consulta: object[] = await objKnex('usuario').where({ email })

        if (consulta.length >= 1) {
            return res.status(400).json({ mensagem: "Já existe um registro com esse email" })
        }

        const criptoSenha = await bcrypt.hash(senha, 10);


        const registroUsuario: UsuarioBanco[] = await objKnex('usuario').insert({ nome_usuario: nome, email, senha: criptoSenha }).returning("*")

        let { senha: _, ...usuario } = registroUsuario[0];

        return res.status(200).json(usuario)
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro no servidor" })
    }
};

export = registrarUsuario