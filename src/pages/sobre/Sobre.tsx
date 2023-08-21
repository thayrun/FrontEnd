import homeLogo from '../../assets/images/Sobre.jpg'

const people = [
    {
      name: "Camila C.",
      role: "Dev Full Stack",
      imageUrl:
        "https://avatars.githubusercontent.com/u/133771938?v=4",
    },
    {
      name: "Marcelo A.",
      role: "Dev Full Stack",
      imageUrl: "https://avatars.githubusercontent.com/u/88298359?s=96&v=4",
    },
  
    {
      name: "Tainara M.",
      role: "Dev Full Stack",
      imageUrl:
        "https://avatars.githubusercontent.com/u/132948293?v=4",
    },
    {
      name: "Tais S.",
      role: "Dev Full Stack",
      imageUrl:
        "https://avatars.githubusercontent.com/u/133772693?v=4",
    },
  
    {
      name: "Thayron N.",
      role: "Dev Full Stack",
      imageUrl:
        "https://avatars.githubusercontent.com/u/132508300?v=4",
    },
    {
      name: "Sabrina P.",
      role: "Dev Full Stack",
      imageUrl:
        "https://avatars.githubusercontent.com/u/101189470?v=4",
    },
  ];

function Sobre() {
    return (
        <>
        <section className="h-min dark:from-[black] dark:to-[black] bg-gradient-to-r from-[#e5804d] to-[#F25258] grid sm:grid-cols-2 sm:place-items-center px-4 py-16 relative overflow-hidden">
        <div className="pb-80 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 ">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl py-16 tracking-tight text-center font-bold dark:text-white text-black sm:text-6xl">
                Nossos produtos
              </h1>
              <p className="mt-6 text-xl dark:text-white text-black text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                nulla assumenda exercitationem corporis eligendi nemo. Cum
                cumque deserunt quis quia.
              </p>
            </div>
            <div>
              <div className="mt-10">
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

                
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="h-min dark:bg-black bg-[#FAFAFA] py-16 rounded-2xl sm:h-screen grid place-items-center my-16 mx-4 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 lg:px-8 xl:grid-cols-3">
          <div className="text-justify">
            <h2 className="dark:text-white text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Organi
            </h2>
            <p className="dark:text-white m-6 text-lg leading-8 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              odio voluptatibus natus consectetur quaerat, dolor illo officia
              nobis? Quidem, quibusdam?
            </p>
          </div>
          <ul
            role="list"
            className="grid-cols-1 grid gap-y-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name} className="">
                <div className="grid grid-cols-3 items-center px-4 py-2">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="col-span-2">
                    <h3 className="dark:text-white text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="dark:text-white text-sm font-semibold leading-6">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
        </>
    )
}

export default Sobre;