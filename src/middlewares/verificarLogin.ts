import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'


export async function verificarUsuarioLogado(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(400).json({ mensagem: "Token de autorizacao não encontrado!" })
    }

    try {
        const arrAuth = authorization.split(' ');
        const token = arrAuth[1];
        const passjwt = process.env.JWT_PASS ? process.env.JWT_PASS : "54321"
        console.log(passjwt);

        const user = jwt.verify(token, passjwt)

        console.log(req.body);

        req.body.user = user;

        console.log(req.body);
        //Jogar user para os headers

        next()

    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "Erro no servidor!!" })
    }
}