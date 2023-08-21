import { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom';
import { toastAlerta } from '../../utils/toastAlerta';
import IconFarmer from '../../assets/images/icon-farmer.png';




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
        <div className='border-4 rounded mx-auto py-6'>
            
            <div className='container flex flex-col mx-auto'>
            <h1 className='font-roboto font-bold text-2xl pb-4 border-b-4'>
             Meu Carrinho <span className="animate-bounce inline-block">🍅</span>
            </h1>

            <div className='flex justify-center text-white py-5 finalizar-button'>
            <button onClick={limparCart} className='text-white font-semibold py-2 px-4 rounded f-button f-button:hover'>Finalizar Compra</button>
            </div>
            
            <div>
                <Link to='/produtos' className='font-semibold py-2 px-4 rounded bg-green-organi mb-2 link-animated border-animate text-orange-300 hover:rounded transition duration-300 transition-transform transform hover:scale-105 focus:outline-none focus:text-orange-600'>Escolher Mais Produtos</Link>
            </div>
            </div>


            <div className='container flex flex-col mx-auto cont-cart-main border-t-4 relative p-cart pb-1'>
            <p className='font-roboto font-bold text-2xl ml-3'>Produtos: </p>
            </div>

            <div className=''>
            {items.map((item) => (
                <div className='container flex flex-col mx-auto cont-cart border-t-4 relative p-cart'>
               <img src={item.foto} alt={item.nome} className='w-28 rounded-lg pt-3 pl-2' />


                <div className='absolute top-0 left-32 p-2'>
                    <h4 className='font-inter font-bold py-4'>{item.nome}</h4>
                    <h2 className=''>{item.descricao}</h2>
                    <h2 className='text-green-700 font-bold pt-1'>R$ {item.preco}</h2>
                </div>

                   
                    <div className='py-4 px-1 ml-auto pr-5'>
                        <button onClick={() => removerProduto(item.id)} className='text-red-500'>
                            <span className='hover:bg-orange-100 rounded-full text-2xl absolute top-1/2 right-10 transform -translate-y-1/2 transition-transform duration-300 transform hover:scale-125'>&times;</span></button>
                    </div>
                
            </div>
            ))}


            <div className='flex justify-center cont-cupom '>
                <div className='flex justify-center pl-16 pr-1 font-roboto font-bold text-2xl'>
                <label htmlFor="" className="flex items-center">
                <img src={IconFarmer} alt="Ícone de Fazendeiro" className="pb-2" />
                 CUPOM?
                </label>
                </div>
                <input 
                type="text" 
                className="placeholder:text-slate-400 block bg-white border border-green-700 rounded-md p-2 shadow-sm focus:outline-none focus:border-orange-400 focus:ring-orange-100 focus:ring-1 sm:text-lg"
                placeholder='ORGANI10'
                />
                <div className='pl-2 pt-2'>
                  <button className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-md shadow-md">
                    Aplicar
                 </button>
                 </div>
            </div>

            <div className='flex justify-center cont-cep'>
                <div className='flex justify-center font-roboto font-bold text-2xl pr-2'>
                    <label htmlFor="" className='flex items-center'>
                        CEP
                    </label>
                </div>
                <input 
                type="text" 
                className='placeholder:text-slate-400 block bg-white border border-green-700 rounded-md p-2 shadow-sm focus:outline-none focus:border-orange-400 focus:ring-orange-100 focus:ring-1 sm:text-lg'
                maxLength={8}
                placeholder="SEU CEP"
                 />
            </div>

        
       
        </div>
        <div className='flex justify-center text-white py-5'>
            <button onClick={limparCart} className='text-white font-semibold py-2 px-4 rounded f-button f-button:hover'>Finalizar Compra</button>
        </div>
        </div>
    )
}

export default Carrinho