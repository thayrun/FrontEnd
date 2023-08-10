
import './Home.css';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import React, { useContext } from 'react'

function Home() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
  }

  let homeLoja = (
    <>
      <ModalProduto />
    </>
  )
    return (
      <>
      <div className="flex justify-center bg-geral">
        <div className='container grid text-lime-950'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold text-orange-500'>Seja bem vinde!</h2>
            <p className='text-xl'>Encontre seus produtos orgânicos</p>
  
              <div className="flex justify-around gap-4">

               
              {usuario.tipo == "CNPJ" ? homeLoja : <></>}

                <Link to='/produtos'>
                  <button className='rounded bg-white text-lime-950 py-2 px-4'>Ver Loja</button>
                </Link>
                
              </div>
            </div>
  
            <div className="flex justify-center">
              <img src='' alt="" className='w-2/2 rounded-lg' />
      
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;