import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full bg-lime-700 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">Organi</div>

          <div className="flex gap-4">
            <Link to="/home" className="hover:underline">
              Inicio
            </Link>
            <div className="hover:underline">Perfil</div>
            <div className="hover:underline">Produtos</div>
            <div className="hover:underline">Categorias</div>
            <Link to="/sobre" className="hover:underline">
              Sobre
            </Link>

            <div className="hover:underline">Sair</div>

            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
