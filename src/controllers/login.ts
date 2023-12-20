import { Request, Response } from "express";
import { Login } from "../types/Login";
import bcrypt from 'bcrypt'
import { UsuarioBanco } from "../types/UsuarioBanco";
import jwt from 'jsonwebtoken'
import { prisma } from "../config/conexaoBD";

export const logarUsuario = async (req: Request, res: Response) => {
    const { email, senha }: Login = req.body;

    if (!email || !senha) {
        return res.status(400).json({ mensagem: "Email e Senha obrigatória para login!" })
    }

    try {
        const usuarioBanco = await prisma.usuario.findFirst({ where: { email } })

        if (!usuarioBanco) {
            return res.status(400).json({ mensagem: "Email ou Senha inválidos" })
        }

        const verificarSenha = await bcrypt.compare(senha, usuarioBanco.senha);

        if (!verificarSenha) {
            return res.status(400).json({ mensagem: "Email ou Senha inválidos" })
        }
        const { senha: _, ...usuario } = usuarioBanco

        const passjwt = process.env.JWT ? process.env.JWT : "54321"

        const token = jwt.sign(usuario, passjwt, { expiresIn: '8h' })

        return res.status(200).json({ usuario, token });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "Erro no servidor!" })
    }
} 