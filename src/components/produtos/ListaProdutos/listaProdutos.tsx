import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { AuthContext } from '../../../contexts/AuthContext';
import Produtos from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import CardProduto from '../CardProdutos/cardProdutos';
import { toastAlerta } from '../../../utils/toastAlerta'

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produtos[]>([]);

    // não estamos utilizando por causa do GetProdutos sem login, caso queira usar importar o useNavigate
  // let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  // useEffect(() => {
  //   if (token === '') {
  //     toastAlerta('Você precisa estar logado', 'info');
  //     navigate('/');
  //   }
  // }, [token]);

  async function buscarProdutos() {
    try {
      await buscar('/produtos', setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);
  return (
    <>
      {produtos.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
}

export default ListaProdutos;