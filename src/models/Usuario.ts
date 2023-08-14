import Produtos  from "./Produto";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  tipo: string;
  foto: string;
  produto?: Produtos | null;
}