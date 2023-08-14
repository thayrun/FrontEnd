import { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import { toastAlerta } from '../../utils/toastAlerta';




function Carrinho() {

    let navigate = useNavigate();

    const { usuario } = useContext(AuthContext);
    const token = usuario.token

    const { items, limparCart, removerProduto } = useContext(AuthContext)

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info');
            navigate('/login');
        }
    }, [token]);

    return (
        <div className='mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div>
            {items.map((item) => (
                <div>
                    <h1>{item.nome}</h1>
                    <h2>{item.descricao}</h2>
                    <h2>R${item.preco}</h2>

                   
                    <div>
                        <button onClick={() => removerProduto(item.id)} className='text-white bg-red-500 hover:bg-red-400 items-center justify-center py-1 px-2'>Deletar do carrinho</button>
                    </div>
                
            </div>
            ))}
        
       
        </div>
        <div className='container text-white  py-1 px-2 align-self: center'>
            <button onClick={limparCart} className='text-white bg-indigo-400 hover:bg-indigo-800  items-center py-2 px-2'>Finalizar Compra</button>
        </div>
        </div>
    )
}

export default Carrinho