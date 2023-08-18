
import FormularioProduto from '../formularioProduto/FormularioProduto';
import { AuthContext } from '../../../contexts/AuthContext'
import { useContext } from 'react'

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalProduto.css'
import Carrinho from '../../../pages/Cart/Carrinho';



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
        trigger={<button className='border rounded px-4 hover:bg-white hover:text-black text-white border-t-[6px]'>Ver Carrinho</button>} modal>
        <div>
          <Carrinho />
        </div>
      </Popup>
      {usuario.tipo == "CNPJ" ? modalLoja : <></>}
    </>

  );
}

export default ModalProduto;