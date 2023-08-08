
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
    

    return (
        <>
            <div className='w-full bg-lime-700 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <div className='text-2xl font-bold uppercase'>Organi</div>

                    <div className='flex gap-4'>

                        <Link to='/home' className='hover:underline'>Inicio</Link>
                        <Link to='/login' className='hover:underline'>Login</Link>
                        <div className='hover:underline'>Perfil</div>
                        <Link to='/produtos' className='hover:underline'>Produtos</Link>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroCategoria'className='hover:underline'>Cadastrar Categoria</Link>
                        <Link to='/sobre' className='hover:underline'>Sobre</Link>
                        <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar