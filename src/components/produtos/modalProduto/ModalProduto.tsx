import React from 'react';
import FormularioProduto from '../formularioProduto/FormularioProduto';
import { AuthContext } from '../../../contexts/AuthContext'
import { useContext } from 'react'

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalProduto.css'
import ListaProdutos from '../listaProdutos/listaProdutos';



function ModalProduto() {

  

  const { usuario } = useContext(AuthContext)




  let modalLoja = (
    <>
    <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Novo Produto</button>} modal>
        <div>
          <FormularioProduto /> 
        </div>
      </Popup>
    
    </>
  )
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Ver Carrinho</button>} modal>
        <div>
          <ListaProdutos /> 
        </div>
      </Popup>
      {usuario.tipo == "CNPJ" ? modalLoja : <></>}
    </>
    
  );
}

export default ModalProduto;