import { Request, Response } from "express"
import { UsuarioLogado } from "../models/UsuarioLogado"

export async function adicionarProdutoUsuario(req: Request, res: Response) {
    const { nome_produto, preco_produto } = req.body

    if (!nome_produto || !preco_produto) {
        return res.status(400).json({ mensagem: "Nome do produto e preço são obrigatórios" })
    }

    try {
        const usuario = new UsuarioLogado(req.body.user)
        const produtoAdicionado = await usuario.adicionarProduto(nome_produto, preco_produto)

        if (!produtoAdicionado) {
            return res.status(500).json({ mensagem: "Ocorreu um erro ao adicionar o produto, tente novamente mais tarde!" })
        }

        return res.status(201).json(produtoAdicionado)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "Erro no servidor" })
    }

}