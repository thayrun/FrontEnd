import homeLogo from '../../assets/images/Sobre.jpg'


function Sobre() {
    return (
        <>
         <div className="bg-lime-950 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Gensix</h2>

              <h3 className='text-4x1 font-bold'>Projeto Integrador Generation Brasil</h3>
              <p className='text-xl'>"Executamos o projeto através de uma plataforma E-commerce desenvolvida pela Gensix. Queríamos viabilizar a conexão de pequenos produtores, donatários, consumidores em vulnerabilidade social e afins. A contribuição será feita pela disponibilização da compra e venda de produtos orgânicos para consumo geral na plataforma. E futuramente pretendemos implementar sessões de informação gratuita sobre alimentação adequada e acesso a programas de incentivo para produção agrícola."</p>
  
              <div className="flex justify-around gap-4">
              
              </div>
            </div>

            <div className="flex justify-center">
                <img src={homeLogo} alt="" className='w-2/2 rounded-lg' />

            </div>
            </div>
            </div>
        </>
    )
}

export default Sobre;