import React, { useState } from "react";
import './index.css';
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

function Conteudo() {
  const [senhas, setSenhas] = useState([]); // Lista única para senhas normais e preferenciais
  const [tipoSenhaSelecionada, setTipoSenhaSelecionada] = useState("Normal"); // Tipo de senha selecionada no select

  return (
    <div className="conteudo-container">
      <Header />

      <div className="conteudo-row">
        <div className="conteudoUm">
          <img className="Farmacia_placa" src="public/imagens/farmarcia-placa.png" alt="Placa de farmácia" />
          <p className="fonteUm">
            Estamos animados em anunciar que a Farmacia popular passou por uma transformação completa! Sob nova direção, nossa farmácia está pronta para oferecer um atendimento renovado e um ambiente moderno.
            <span className="fonteDois">Os 10 primeiros clientes que realizarem compras acima de 100 Reais ganham uma super camiseta.</span>
          </p>
        </div>

        <div className="index-conteudoDois">
          <img className="Farmacia_camiseta" src="public/imagens/farmarcia-camiseta.png" alt="Camiseta da farmácia" />
        </div>
      </div>

      <div className="ConteudoTres">
        <p className="fonte_Promoçôes">
          Você toma diversos remédios por dia?
          <br />
          <span>Receba seus medicamentos organizados por dia e por hora.</span>
        </p>
      </div>

      <div className="ConteudoQuadro">
        <Navbar className="navbar" />
      </div>
    </div>
  );
}

export default Conteudo;
