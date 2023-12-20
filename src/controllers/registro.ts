import { Request, Response } from "express";
import { UsuarioBanco } from "../types/UsuarioBanco";
import { prisma } from "../config/conexaoBD";
import bcrypt from 'bcrypt'

const registrarUsuario = async (req: Request, res: Response): Promise<{}> => {
    const { nome, email, senha }: UsuarioBanco = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: "Nome email e senha precisam ser enviadas" })
    }
    try {
        const consulta = await prisma.usuario.findFirst({ where: { email } })

        if (consulta) {
            return res.status(400).json({ mensagem: "Já existe um registro com esse email" })
        }

        const criptoSenha = await bcrypt.hash(senha, 10);

        const registroUsuario = await prisma.usuario.create({ data: { email, nome_usuario: nome, senha: criptoSenha } })

        let { senha: _, ...usuario } = registroUsuario;

        return res.status(200).json(usuario)
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro no servidor" })
    }
};

export = registrarUsuario