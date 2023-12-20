import { Request, Response } from "express";
import { objKnex } from "../config/conexaoBD";
import { Login } from "../types/Login";
import bcrypt from 'bcrypt'
import { UsuarioBanco } from "../types/UsuarioBanco";
import jwt from 'jsonwebtoken'

export const logarUsuario = async (req: Request, res: Response) => {
    const { email, senha }: Login = req.body;

    if (!email || !senha) {
        return res.status(400).json({ mensagem: "Email e Senha obrigatória para login!" })
    }
    try {
        const usuarioBanco: UsuarioBanco = await objKnex('usuario').where({ email }).first();

        if (!usuarioBanco) {
            return res.status(400).json({ mensagem: "Email ou Senha inválidos" })
        }

        const verificarSenha = await bcrypt.compare(senha, usuarioBanco.senha);

        if (!verificarSenha) {
            return res.status(400).json({ mensagem: "Email ou Senha inválidos" })
        }

        // jwt.sign()


    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "Erro no servidor!" })
    }
} 