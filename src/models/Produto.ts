import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produtos {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  quantidade: number;
  categoria: Categoria | null;
  usuario: Usuario | null;
}