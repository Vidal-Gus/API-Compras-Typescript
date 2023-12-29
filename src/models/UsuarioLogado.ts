import { UserVerify } from "../types/UserVerify"
import { prisma } from "../config/conexaoBD"

class UsuarioLogado {
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

    adicionarProduto = (nome: string, preco: number): {} => {
        return {}
    }

    listarProdutos = async (): Promise<[]> => {
        return []
    }

    atualizarProduto = (nome: string, preco: number, id: number): {} => {
        return {}
    }

    deletarProduto = (id: number) => {

    }

}