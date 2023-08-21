
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



              <div className="flex justify-around gap-4">

             {/* <ModalProduto /> */}
              
            

                <Link to='/produtos'>
                  <button ></button>
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