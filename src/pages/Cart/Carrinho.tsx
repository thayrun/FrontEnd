import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'




function Carrinho() {
    const { items, limparCart, removerProduto } = useContext(AuthContext)

    return (
        <div>
            {items.map((item) => (
                <div>
                    <h1>{item.nome}</h1>
                    <h2>{item.descricao}</h2>
                    <h2>R${item.preco}</h2>
                    {/* <h2>Quantidade{item.}</h2> */}
                    <div>
                        <button onClick={() => removerProduto(item.id)} className='text-white bg-red-500 hover:bg-red-400 items-center justify-center py-1 px-2'>Deletar do carrinho</button>
                    </div>
                </div>
            ))}


            <button onClick={limparCart} className='text-white bg-indigo-400 hover:bg-indigo-800  items-center justify-center py-2 px-2'>Finalizar Compra</button>
        </div>
    )
}

export default Carrinho