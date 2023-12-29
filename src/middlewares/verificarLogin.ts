import { Request, Response, NextFunction } from "express";
import jwt, { JsonWebTokenError } from 'jsonwebtoken'
import { prisma } from "../config/conexaoBD";

async function verificarUsuarioExistente(user: any) {
    const verificarExistencia = await prisma.usuario.findFirst({ where: { id: user.id } });
    if (!verificarExistencia) {
        return false
    }

    return true

}

export async function verificarUsuarioLogado(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(400).json({ mensagem: "Token de autorizacao não encontrado!" })
    }

    try {
        const arrAuth = authorization.split(' ');
        const token = arrAuth[1];
        const passjwt = process.env.JWT_PASS ? process.env.JWT_PASS : "54321"

        const user = jwt.verify(token, passjwt)

        const usuarioExistente = await verificarUsuarioExistente(user);
        if (!usuarioExistente) {
            return res.status(404).json({ mensagem: "Usuario não encontrado no banco" })
        }

        req.body.user = user;

        next()

    } catch (error) {
        console.log(error);
        if (error instanceof (JsonWebTokenError)) {
            return res.status(400).json({ mensagem: "Houve um problema com seu token! Faça login novamente" })
        }
        return res.status(500).json({ mensagem: "Erro no servidor!!" })
    }
}