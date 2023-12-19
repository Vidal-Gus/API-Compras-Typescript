import { objKnex } from "../config/conexaoBD"


class UsuarioLogado {
    constructor(private nome: string, private email: string, private senha: string, private id: number) {

    }

    adicionarProduto = (nome: string, preco: number): {} => {
        return {}
    }

    listarProdutos = async (): Promise<[]> => {
        const items: object[] = await objKnex('compras').where({ usuaro_id: this.id })
        return []
    }

    atualizarProduto = (nome: string, preco: number, id: number): {} => {
        return {}
    }

    deletarProduto = (id: number) => {

    }

}