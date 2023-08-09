
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import React, { useContext } from 'react'


function Navbar() {

  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
  }

  let navbarComponent

  let navbarLoja = (
    <>
      <Link to='/categorias' className='hover:text-orange-950 hover:rounded transition duration-300 transition-transform transform hover:scale-105 focus:outline-none focus:text-orange-600'>Categorias</Link>
      <Link to='/cadastroCategoria' className='hover:text-orange-950 hover:rounded transition duration-300 transition-transform transform hover:scale-105 focus:outline-none focus:text-orange-600'>Cadastrar Categoria</Link>
    </>
  )

  if (usuario.token !== "") {
    navbarComponent = (

      <>
        <div className='w-full flex justify-center py-4'>
          <div className="flex justify-center nav-cont text-lg">
            <Link to='/home' className='text-orange-900 text-3xl font-bold uppercase logo font-roboto p-logo hover:rounded-md hover:shadow-lg hover:bg-orange-50'>Organi .</Link>
          </div>
        </div>

        <div className='w-screen rounded bg-green-900 flex justify-center text-md'>
          <div className='flex gap-7 py-3 text-white font-roboto'>
            <Link to='/home' className='hover:text-orange-950 hover:rounded transition duration-300 transition-transform transform hover:scale-105 focus:outline-none focus:text-orange-600'>Inicio</Link>
            <Link to='/login' className='hover:text-orange-950 hover:rounded transition duration-300 transition-transform transform hover:scale-105 focus:outline-none focus:text-orange-600'>Login</Link>
            <Link to='/perfil' className='hover:text-orange-950 hover:rounded transition duration-300 transition-transform transform hover:scale-105 focus:outline-none focus:text-orange-600'>Perfil</Link>
            <Link to='/produtos' className='hover:text-orange-950 hover:rounded transition duration-300 transition-transform transform hover:scale-105 focus:outline-none focus:text-orange-600'>Produtos</Link>

            {usuario.tipo == "CNPJ" ? navbarLoja : <></>}

            <Link to='/sobre' className='hover:text-orange-950 hover:rounded transition duration-300 transition-transform transform hover:scale-105 focus:outline-none focus:text-orange-600'>Sobre</Link>
            <Link to='' onClick={logout} className='hover:text-orange-950 hover:rounded transition duration-300 transition-transform transform hover:scale-105 focus:outline-none focus:text-orange-600'>Sair</Link>

            {/* {usuario.tipo == "CNPJ" ? navbarLoja : "Qualquer coisa"} */}

          </div>
        </div >
      </>

    )
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar