import { UserVerify } from "../types/UserVerify"
import { prisma } from "../config/conexaoBD"

export class UsuarioLogado {
    private id: number
    private nome_usuario: string
    private email: string
    private iat: number
    private exp: number

    constructor(user: UserVerify) {
        this.id = user.id,
            this.nome_usuario = user.nome_usuario,
            this.email = user.email,
            this.iat = user.iat,
            this.exp = user.exp
    }

    adicionarProduto = async (nome: string, preco: number): Promise<{}> => {
        try {
            const produtoAdicionado = await prisma.compras.create({ data: { nome_item: nome, preco, usuario_id: this.id } })

            return produtoAdicionado
        } catch (error) {
            console.log(error)
            return false
        }
    }

    listarProdutos = async (): Promise<[]> => {
        return []
    }

    atualizarProduto = async (nome: string, preco: number, id: number): Promise<{}> => {
        return {}
    }

    deletarProduto = async (id: number) => {

    }

}