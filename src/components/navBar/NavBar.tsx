
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'
import IconCart from '../../assets/images/cesta.png'
import { toastAlerta } from '../../utils/toastAlerta'



function Navbar() {

  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlerta('Usuário deslogado com sucesso', 'info')
    navigate('/login')
  }

  let navbarComponent

  if (usuario.token !== "") {
    navbarComponent = (

      <>
        <div className='w-full flex justify-center py-4'>
          <div className="flex justify-center nav-cont text-lg">
            <Link to='/home' className='text-orange-900 text-3xl font-bold uppercase logo font-roboto p-logo hover:rounded-md hover:shadow-lg hover:bg-orange-50'>Organi .</Link>
          </div>
        </div>

        <div className='w-screen bg-green-900 flex justify-center text-md'>
          <div className='flex gap-7 py-3 text-white font-roboto'>
            <Link to='/home' className='hover:text-orange-950 hover:rounded transition duration-300 transition-transform transform hover:scale-105 focus:outline-none focus:text-orange-600'>Inicio</Link>
            <Link to='/perfil' className='hover:text-orange-950 hover:rounded transition duration-300 transition-transform transform hover:scale-105 focus:outline-none focus:text-orange-600'>Perfil</Link>
            <Link to='/produtos' className='hover:text-orange-950 hover:rounded transition duration-300 transition-transform transform hover:scale-105 focus:outline-none focus:text-orange-600'>Produtos</Link>
            <Link to='/sobre' className='hover:text-orange-950 hover:rounded transition duration-300 transition-transform transform hover:scale-105 focus:outline-none focus:text-orange-600'>Sobre</Link>
            <Link to='' onClick={logout} className='hover:text-orange-950 hover:rounded transition duration-300 transition-transform transform hover:scale-105 focus:outline-none focus:text-orange-600'>Sair</Link>

            {/* {usuario.tipo == "CNPJ" ? navbarLoja : "Qualquer coisa"} */}
       
                   {/* Div do Carrinho */}
                   <div className='absolute top-2 right-4'>
              <Link to='/carrinho'>
                <img src={IconCart} alt="icone do carrinho" className='cart-icon cart-icon:hover' />
              </Link>
            </div>
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