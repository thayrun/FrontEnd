
import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'
import logoOds from '../../assets/images/ods logo.jpg'
import genSix from '../../assets/images/gensix2.jpg'
import camihPerfil from '../../assets/images/camila.jpg'
import maPerfil from '../../assets/images/marcelo.jpg'
import saPerfil from '../../assets/images/sabrina.jpeg'
import tainaraPerfil from '../../assets/images/tainara.jpg'
import taisPerfil from '../../assets/images/tais.jpg'
import thayPerfil from '../../assets/images/thayron.jpg'



function Sobre() {
  return (
    <>
      <section className="h-min bg-gradient-to-r from-[#9D3103] to-[#FFDF93] grid sm:grid-cols-2 sm:place-items-center px-4 py-16 relative overflow-hidden">
        <div className="pb-80 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 ">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl py-16 tracking-tight text-center font-bold dark:text-white text-black sm:text-6xl">
                Gensix
              </h1>
              <h3 className="mt-6 text-xl dark:text-white text-black text-justify">
                Somos a equipe da Gensix, um grupo de alunos com paixão pelo desenvolvimento de software.
                Iniciamos nossa jornada em meados de 2023, participando do bootcamp de Desenvolvimento FullStack Java pela Generation Brasil.
                Ao longo desse período, mergulhamos de cabeça nos desafios e oportunidades para aprender e aprimorar ainda mais nossas habilidades técnicas e soft skills.
              </h3>
            </div>
          </div>
        </div>

        <div>
          <img
            className="flex-justify-end mt-4 rounded-2xl overflow-hidden"
            src={genSix} alt={`Foto dos integrantes da Gensix`}
          />
        </div>
      </section>

      <section className="h-min bg-gradient-to-r from-[#14532D] to-[#4F8D68] grid sm:grid-cols-2 sm:place-items-center px-4 py-16 relative overflow-hidden">
        <div className="pb-80 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 ">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl py-16 tracking-tight text-center font-bold dark:text-white text-black sm:text-6xl">
                Propósito
              </h1>
              <h3 className="mt-6 text-xl dark:text-white text-black text-justify">
                Em nossa trajetória no bootcamp, fomos desafiados a criar uma aplicação que tenha impacto
                em algum dos Objetivos De Sustentabilidade da ONU. E nós escolhemos a ODS 2: Fome zero e agricultura sustentável.
                De acordo com o estudo produzido por diversas agências governamentais e não governamentais,
                cerca de 258 milhões de pessoas em 58 países sofreram insegurança alimentar.
                Isso se considerarmos apenas o ano de 2022.
                Então queríamos desenvolver algo que pudesse de fato viabilizar a conexão de pequenos produtores, donatários,
                consumidores em vulnerabilidade social e afins.
              </h3>
            </div>
          </div>
        </div>

        <div>
          <img
            className="flex-justify-center rounded-full border-4 border-[#f3f4f6]"
            src={logoOds} alt={`Foto das ODS da ONU`}
          />
        </div>
      </section>

      <section className="h-min bg-gradient-to-r from-[#EF7D0C] to-[#9D3103] grid sm:grid-cols-2 sm:place-items-center px-4 py-16 relative overflow-hidden">
        <div className="pb-80 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 ">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl py-16 tracking-tight text-center font-bold dark:text-white text-black sm:text-6xl">
                Organi
              </h1>
              <h3 className="mt-6 text-xl dark:text-white text-black text-justify">
                E assim nasce a Organi. Uma aplicação E-Commerce focada em facilitar a compra e venda de produtos orgânicos de produtores independentes.
                Para que a agricultura familiar possa ter um novo caminho de renda e que consumidores finais possam ter acesso à produtos orgânicos e de qualidade.
                Futuramente pretendemos implementar sessões de informação gratuita sobre alimentação adequada e acesso à programas de incentivo para produção agrícola.
              </h3>
            </div>
          </div>
        </div>

        
        {/* Decorative image grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl "
        >
          <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
            <div className="py-16 flex sm:items-center space-x-6 lg:space-x-8">
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://www.unimed.coop.br/documents/20182/16124848/frutas-vermelhas.jpg/4fbc9d33-b3c1-48ac-97d3-445136978a7c?t=1641933504506"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44  overflow-hidden rounded-lg">
                  <img
                    src="https://rotasdeviagem.com.br/wp-content/uploads/2022/04/frutas-mais-consumidas-no-brasil.webp"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44  overflow-hidden rounded-lg">
                  <img
                    src="https://capitalist.com.br/wp-content/uploads/2023/01/frutas-scaled.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44  overflow-hidden rounded-lg">
                  <img
                    src="https://media.gazetadopovo.com.br/2023/03/30141325/bigstock-Watermelon-Slice-On-Background-460538017-960x540.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44  overflow-hidden rounded-lg">
                  <img
                    src="https://www.avivaescolainfantil.com.br/wp-content/uploads/2022/06/kiwi-29062022.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2022/09/30/1413682278-frutas-baratas-de-outubro.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44  overflow-hidden rounded-lg">
                  <img
                    src="https://cdn.wizard.com.br/wp-content/uploads/2017/01/05115936/aprenda-os-nomes-das-frutas-em-ingles.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-min bg-white py-16 rounded-2xl sm:h-screen grid place-items-center my-16 mx-4 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 lg:px-8 xl:grid-cols-3">
          <div className="text-justify">
            <h2 className="text-center text-3xl font-bold tracking-tight text-green-600 sm:text-4xl">
              Conheça nosso time de desenvolvimento:
            </h2>
            <h3 className="mt-6 text-xl text-black text-center">
              Entre em contato conosco pelo Linkedin e conheça outros projetos dos integrantes em nossos repositórios no Github!
            </h3>
          </div>
          <ul
            role="list"
            className="grid-cols-1 grid gap-y-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-16 xl:col-span-2">



            <div className="grid grid-cols-3 items-justify px-3 py-2">
              <img
                className="h-22 w-24 rounded-full border-2 border-[#f3f4f6]"
                src={camihPerfil} alt={`Foto de perfil de Camila Nascimento`}
              />

              <div className="col-span-2">
                <h2 className="text-base font-bold leading-6 tracking-tight text-gray-950">
                  Camila Nascimento
                </h2>
                <p className="text-sm font-semibold leading-10">
                  FullStack Developer
                </p>
                <div className="flex justify-start">
                  <a href="https://www.linkedin.com/in/camilanascimento23/" target="_blank">
                    <LinkedinLogo size={33} weight='bold' color='#0369a1' />
                  </a>
                  <a href="https:/github.com/milabizzle" target="_blank">
                    <GithubLogo size={33} weight='bold' color='#4b5563' />
                  </a>
                </div>

              </div>
            </div>



            <div className="grid grid-cols-3 items-justify px-3 py-2">
              <img
                className="h-22 w-24 rounded-full border-[#9ca3af]"
                src={maPerfil} alt={`Foto de perfil de Marcelo Apolinario`}
              />

              <div className="col-span-2">
                <h2 className="text-base font-bold leading-6 tracking-tight text-gray-950">
                  Marcelo Apolinário
                </h2>
                <p className="text-sm font-semibold leading-10">
                  FullStack Developer
                </p>
                <div className="flex justify-start">
                  <a href="https://www.linkedin.com/in/imapolinario/" target="_blank">
                    <LinkedinLogo size={33} weight='bold' color='#0369a1' />
                  </a>
                  <a href="https://github.com/whoamiApolo" target="_blank">
                    <GithubLogo size={33} weight='bold' color='#4b5563' />
                  </a>
                </div>
              </div>
            </div>



            <div className="grid grid-cols-3 items-center px-3 py-2">
              <img
                className="h-22 w-24 rounded-full border-2 border-[#f3f4f6]"
                src={saPerfil} alt={`Foto de perfil de Sabrina Porfilia`}
              />

              <div className="col-span-2">
                <h2 className="text-base font-bold leading-6 tracking-tight text-gray-950">
                  Sabrina Porfilia
                </h2>
                <p className="text-sm font-semibold leading-10">
                  FullStack Developer
                </p>
                <div className="flex justify-start">
                  <a href="https://www.linkedin.com/in/sabrinaporfilia/" target="_blank">
                    <LinkedinLogo size={33} weight='bold' color='#0369a1' />
                  </a>
                  <a href="https://github.com/Sabrinaporfilia" target="_blank">
                    <GithubLogo size={33} weight='bold' color='#4b5563' />
                  </a>
                </div>
              </div>
            </div>



            <div className="grid grid-cols-3 items-center px-3 py-2">
              <img
                className="h-22 w-24 rounded-full border-2 border-[#f3f4f6]"
                src={tainaraPerfil} alt={`Foto de perfil de Tainara Mello`}
              />

              <div className="col-span-2">
                <h2 className="text-base font-bold leading-6 tracking-tight text-gray-950">
                  Tainara Mello
                </h2>
                <p className="text-sm font-semibold leading-10">
                  FullStack Developer
                </p>
                <div className="flex justify-start">
                  <a href="https://www.linkedin.com/in/tainaraamello/" target="_blank">
                    <LinkedinLogo size={33} weight='bold' color='#0369a1' />
                  </a>
                  <a href="https://github.com/taimello" target="_blank">
                    <GithubLogo size={33} weight='bold' color='#4b5563' />
                  </a>
                </div>
              </div>
            </div>



            <div className="grid grid-cols-3 items-center px-3 py-2">
              <img
                className="h-22 w-24 rounded-full border-2 border-[#f3f4f6]"
                src={taisPerfil} alt={`Foto de perfil de Tais Salis`}
              />

              <div className="col-span-2">
                <h2 className="text-base font-bold leading-6 tracking-tight text-gray-950">
                  Tais Salis
                </h2>
                <p className="text-sm font-semibold leading-10">
                  FullStack Developer
                </p>
                <div className="flex justify-start">
                  <a href="https://www.linkedin.com/in/taisluiza/" target="_blank">
                    <LinkedinLogo size={33} weight='bold' color='#0369a1' />
                  </a>
                  <a href="https://github.com/Taisluiza" target="_blank">
                    <GithubLogo size={33} weight='bold' color='#4b5563' />
                  </a>
                </div>
              </div>
            </div>



            <div className="grid grid-cols-3 items-center px-3 py-2">
              <img
                className="h-22 w-24 rounded-full border-2 border-[#f3f4f6]"
                src={thayPerfil} alt={`Foto de perfil de Thayron Nogueira`}
              />

              <div className="col-span-2">
                <h2 className="text-base font-bold leading-6 tracking-tight text-gray-950">
                  Thayron Nogueira
                </h2>
                <p className="text-sm font-semibold leading-10">
                  FullStack Developer
                </p>
                <div className="flex justify-start">
                  <a href="https://www.linkedin.com/in/thayron-nogueira-954139280/" target="_blank">
                    <LinkedinLogo size={33} weight='bold' color='#0369a1' />
                  </a>
                  <a href="https://github.com/thayrun" target="_blank">
                    <GithubLogo size={33} weight='bold' color='#4b5563' />
                  </a>
                </div>
              </div>
            </div>

          </ul>
        </div>
      </section>
    </>
  )
}

export default Sobre;