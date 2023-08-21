
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import { useContext } from 'react'

import Produtos from '../../../models/Produto';

interface CardProdutoProps {
  produto: Produtos;
}


function CardProduto({ produto }: CardProdutoProps) {


  const { usuario, adicionarProduto } = useContext(AuthContext)

  console.log(usuario)

  let cardProdutosCliente = (
    <>
      <div className="flex">
        <button
    className='w-full border rounded text-white flex items-center justify-center py-2 relative add-button add-button:hover'
    onClick={() => adicionarProduto(produto)}
  >
    Adicionar ao carrinho
        </button>

      </div>
    </>
  )

  let cardProdutosLoja = (
    <>
      <div className="flex">
        <Link to={`/editarProduto/${produto.id}`} className='w-full text-white bg-green-organi hover:bg-green-organi flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${produto.id}`} className='text-white bg-orange-400 hover:bg-orange-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>

      </div>
    </>

  )

  return (
      <div className='container pl-6 pr-2'>
    <div className='flex flex-col border border-orange-200 rounded overflow-hidden justify-between'>
      <div>
        <div className='bg-white font-inter'>
          <img src={produto.foto} className='h-full w-full border rounded object-cover object-center lg:h-80 lg:w-full hover:opacity-75 cursor-pointer add-button' alt="Foto do Produto" />
          <h4 className='text-lg font-semibold uppercase pl-2 pt-4'>{produto.nome}</h4>
          <p className='pl-2 '>Descrição: {produto.descricao}</p>
          {/* Lógica pra Exibir a Categoria no Card*/}
          {produto.categoria && <p className='pl-2'>Categoria: {produto.categoria.nome}</p>}
          <p className='pl-2 text-gray-900'>Preço: {produto.preco}</p>
          <p className='pl-2'>Quantidade: {produto.quantidade}</p>
          <div className="flex py-2 px-4 items-center gap-4">
          <img src={produto.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h4 className='text-lg font-bold text-center uppercase'>{produto.usuario?.nome}</h4>
        </div>

          {usuario.tipo == "CNPJ" ? cardProdutosLoja : <></>}

          {usuario.tipo == "CPF" ? cardProdutosCliente : <></>}
        </div>
      </div>
      </div>
    </div>
  );
}

export default CardProduto;