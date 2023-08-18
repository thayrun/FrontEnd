import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import loginLogo from '../../assets/images/perfill.jpg'
import { toastAlerta } from '../../utils/toastAlerta'

function Perfil() {
  let navigate = useNavigate()

  

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta('Você precisa estar logado', 'erro')
            navigate("/login")
        }
    }, [usuario.token])
    
    console.log(JSON.stringify(usuario))

  return (
    <div className='container mx-auto mt-4 rounded-2xl overflow-hidden w-96'>
      <img className='w-full h-48 object-cover border-b-8 border-white' src={loginLogo} alt="Capa do Perfil" />
      <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-40 mx-auto mt-[-4rem] border-4 border-white relative z-10' />
      <div className="relative mt-[-2rem] h-40 flex flex-col bg-lime-900 text-white text-1xl items-center justify-center">
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>
        <p>Tipo: {usuario.tipo}</p>
      </div>
    </div>
  )
}

export default Perfil