import './Cadastro.css'
import { cadastrarUsuario } from '../../services/Service'
import Usuario from '../../models/Usuario'
import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useEffect, useState } from 'react'
import { toastAlerta } from '../../utils/toastAlerta'

function Cadastro() {

  let navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    tipo: '',
    senha: '',
    foto: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    tipo: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso')

      } catch (error) {
        toastAlerta('Erro ao cadastrar o Usuário', 'erro')
      }

    } else {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    }
  }

  console.log(usuario)

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="fundoCadastro hidden lg:block"></div>
        
        <form className='flex justify-center items-center flex-col w-2/3 gap-6' onSubmit={cadastrarNovoUsuario}>
          <h2 className='text-slate-900 text-4xl sm:text-5xl'>Cadastre-se</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome"></label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-b border-black p-1"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario"></label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="E-mail"
              className="border-b border-black p-1"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className='grid sm:grid-cols-4 items-center w-full '>
            <p className='text-center col-span-2'>Selecione um tipo:</p>
          <div className='flex gap-3 mx-auto'>
            <input 
            type="radio" 
            id="tipo" 
            name="tipo" 
            value="CPF"
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
            <label>CPF</label><br/>
            </div>
            <div className='flex gap-3 mx-auto'>
            <input 
            type="radio" 
            id="tipo" 
            name="tipo" 
            value="CNPJ"
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
              <label>CNPJ</label><br />
              </div>
          </div>


          <div className="flex flex-col w-full">
            <label htmlFor="foto"></label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-b border-black p-1"
              value={usuario.foto} 
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
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha"></label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-b border-black p-1"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>
          <div className="flex justify-center w-full gap-8">
            <button className='rounded-xl text-white bg-[#9d3103] hover:text-[#9d3103] hover:bg-white ease-in-out duration-1000 hover:underline px-4 py-2 w-1/2 text-lg tracking-wide' onClick={back}>
              Cancelar
            </button>
            <button className='rounded-xl text-white bg-[#4f8d68] hover:text-[#4f8d68] hover:bg-white ease-in-out duration-1000 hover:underline px-4 py-2 w-1/2 text-lg tracking-wide' type='submit'>
              Cadastrar
            </button>
          </div>
        </form>

      </div>
    </>
  )
}

export default Cadastro