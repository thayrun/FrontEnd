import { createContext, ReactNode, useState } from "react";
import Produto from "../models/Produto";

interface ContextProps {
    adicionarProduto: (produto: Produto) => void
    removerProduto: (produtoId: number) => void
    limparCart: () => void
    items: Produto[]
    quantidadeItems: number
}

interface ContextProviderProps {
    children: ReactNode
}

export const Context = createContext({} as ContextProps)

export function Provider({ children }: ContextProviderProps) {

    const [items, setItems] = useState<Produto[]>([])

    const quantidadeItems = items.length

    function adicionarProduto(produto: Produto) {
        // Essa sintaxe guarda as info anteriores do State e atualiza com os novos dados(objetos)
        setItems(state => [...state, produto])
    }

    function removerProduto(produtoId: number) {
        // Usamos a função filter, com ela fazemos um Filtro no Array usando uma condição
        const coffeeExistsInCart = items.filter(
            (item) => item.id !== produtoId)

        // Atualiza o State
        setItems(coffeeExistsInCart)
    }

    function limparCart() {
        alert("Compra Efetuada com Sucesso")
        setItems([])
    }

    return (
        <Context.Provider value={{ adicionarProduto, removerProduto, limparCart, items, quantidadeItems }}>
            {children}
        </Context.Provider>
    )

}