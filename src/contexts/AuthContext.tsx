import { createContext, ReactNode, useState } from "react"
import { login } from "../services/Service"
import UsuarioLogin from "../models/UsuarioLogin"
import { toastAlerta } from "../utils/toastAlerta"
import Produto from "../models/Produto"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
    adicionarProduto: (produto: Produto) => void
    removerProduto: (produtoId: number) => void
    limparCart: () => void
    items: Produto[]
    quantidadeItems: number
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        tipo: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            toastAlerta('Usuário logado com sucesso', 'info');
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            toastAlerta('Dados do usuário inconsistentes', 'erro');
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            tipo: "",
            foto: "",
            token: ""
        })
    }

    // Carrinho

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
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading, adicionarProduto, removerProduto, limparCart, items, quantidadeItems }}>
            {children}
        </AuthContext.Provider>
    )
}