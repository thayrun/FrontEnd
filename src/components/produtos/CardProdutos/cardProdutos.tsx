
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
          className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'
          
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
        <Link to={`/editarProduto/${produto.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${produto.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>

      </div>
    </>
  )

  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img src={produto.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase'>{produto.usuario?.nome}</h3>
        </div>
        <div className='p-4'>
          <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
          <p>Descrição: {produto.descricao}</p>
          <p>Preço: {produto.preco}</p>
          <p>Quantidade: {produto.quantidade}</p>
          <p>Foto: <img src={produto.foto} className='h-12 rounded-full' alt="Foto do Produto" /></p>
          {/* Lógica pra Exibir a Categoria no Card*/}
          {produto.categoria && <p>Categoria: {produto.categoria.nome}</p>}

          {usuario.tipo == "CNPJ" ? cardProdutosLoja : <></>}

          {usuario.tipo == "CPF" ? cardProdutosCliente : <></>}
        </div>
      </div>

    </div>
  );
}

export default CardProduto;