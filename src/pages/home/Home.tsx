
import './Home.css';
// import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';
import { Link} from 'react-router-dom'
import ImgSlide from '../home/SwiperHome'
import ListaProdutos from '../../components/produtos/ListaProdutos/listaProdutos';


function Home() {

 
    return (
      <>
      <div className="bg-geral">
         
         <ImgSlide/>
<<<<<<< HEAD

            { /*
            <div className='flex pt-8'>
            <div className='card'>
              <h2 className='title'>Pagamento Rápido e Seguro</h2>
              <p className='description'>Via </p>
            </div>
            </div>
    */}


             <div className='container mt-7 mx-auto pt-16'>
             <h1 className='font-roboto font-bold text-3xl pb-1'>Encontre seu Produto: </h1>
              <div className='contain-produtos flex justify-center items-center pr-6'>
             <ListaProdutos />
             </div>
             </div>



=======
        <div className='container grid text-lime-950'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold text-orange-500 pt-20'>Seja bem vinde!</h2>

            <p className='text-xl text-lime-100'>Encontre seus produtos orgânicos</p>

  
>>>>>>> d259254e750a5e061de6f54df92f61d2d9ced3f3
              <div className="flex justify-around gap-4">

             {/* <ModalProduto /> */}
              
            

                <Link to='/produtos'>
<<<<<<< HEAD
                  <button ></button>
=======
                  <button className='border rounded text-white hover:text-black py-2 px-4 hover:bg-white border-t-[6px]'>Ver Loja</button>
>>>>>>> d259254e750a5e061de6f54df92f61d2d9ced3f3
                </Link>
                
              </div>
            </div>
  
            <div className="flex justify-center">
              <img src='' alt="" className='w-2/2 rounded-lg' />
      
            </div>
      </>
    );
}

export default Home;