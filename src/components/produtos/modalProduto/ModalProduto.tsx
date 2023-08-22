import FormularioProduto from '../formularioProduto/FormularioProduto';
import { AuthContext } from '../../../contexts/AuthContext'
import { useContext } from 'react'

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalProduto.css'

function ModalProduto() {

  const { usuario } = useContext(AuthContext)

  let modalLoja = (
    <>
      <Popup
        trigger={<button className='b-nproduto text-2xl bg-gray-100 rounded border border-md link-animated border-animate hover:text-orange-400 hover:rounded transition duration-300 transition-transform transform hover:scale-105 focus:outline-none focus:text-orange-600'>Cadastre seu Produto</button>} modal>
        <div className=''>
          <FormularioProduto />
        </div>
      </Popup>
    </>
  )

  return (
    <> 
      {usuario.tipo == "CNPJ" ? modalLoja : <></>}
    </>
  );
}

export default ModalProduto;