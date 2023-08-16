import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const {isLoading} = useContext(AuthContext) 

  useEffect(() => {
    if (usuario.token !== "") {
        navigate('/home')
    }
}, [usuario])

function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
  setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
  })
}

function login(e: ChangeEvent<HTMLFormElement>) {
  e.preventDefault()
  handleLogin(usuarioLogin)
}
  
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
        <form onSubmit={login} className="flex justify-center items-center flex-col w-2/3 gap-6" >
          <h2 className="text-slate-900 text-4xl sm:text-5xl">Entrar</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario"></label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="E-mail"
              className="border-b border-black p-1"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            
            />
          </div>
          
          <div className="flex flex-col w-full">
            <label htmlFor="senha"></label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-b border-black p-1"
              value={usuarioLogin.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
             
            />
          </div>
          <button  type='submit' className="rounded-xl bg-[#14532d] hover:bg-[#4f8d68] text-white sm:w-1/2 py-2 flex justify-center text-lg tracking-wide ease-in-out duration-1000 hover:underline w-full">
          {isLoading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> :
            <span>Entrar</span>}
          </button>
          <p>
            Ainda não tem uma conta?{' '}
            <Link to = "/cadastro" className= "text-[#EF7D0C] hover:underline">
            Cadastre-se
            </Link>
          </p>
        </form>
        <div className="fundoLogin hidden lg:block"></div>
      </div>
    </>
  );
}

export default Login;