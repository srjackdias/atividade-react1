import React, { useState } from "react";
import './index.css';
import Header from "../Components/Header";

import Navbar from  "../Components/Navbar"


function Conteudo() {
  const [senhas, setSenhas] = useState([]); // Lista única para senhas normais e preferenciais
  const [senhaChamada, setSenhaChamada] = useState();
  const [tipoSenhaSelecionada, setTipoSenhaSelecionada] = useState("Normal"); // Tipo de senha selecionada no select

  // Função para gerar uma nova senha
  // function GerarSenha() {
  //   console.log("Tipo de senha selecionada:", tipoSenhaSelecionada); // Adiciona um log para verificar o tipo de senha selecionada

  //   let novaSenha = {
  //     id: Date.now(),
  //     tipo: tipoSenhaSelecionada,
  //     senha: Math.floor(Math.random() * 10000) // Gera um número de 0 a 9999
  //   };

  //   console.log("Nova senha gerada:", novaSenha); // Log da nova senha gerada

  //   // Adiciona a nova senha à lista
  //   setSenhas((prevSenhas) => {
  //     console.log("Lista de senhas atualizada:", [...prevSenhas, novaSenha]);
  //     return [...prevSenhas, novaSenha];
  //   });
  // }

  // // Função para chamar a próxima senha
  // function ChamarSenhaNoBalcao() {
  //   if (senhas.length === 0) {
  //     setSenhaChamada(null); // Se a fila estiver vazia
  //     alert("A fila está vazia!"); // Informar o atendente
  //     return;
  //   }

  //   // Filtra as senhas preferenciais e normais
  //   const senhasPreferenciais = senhas.filter(senha => senha.tipo === "Preferencial");
  //   const senhasNormais = senhas.filter(senha => senha.tipo === "Normal");

  //   let proximaSenha;

  //   // Verifica se há senhas preferenciais
  //   if (senhasPreferenciais.length > 0) {
  //     // Pega a senha preferencial com o menor número
  //     proximaSenha = senhasPreferenciais.reduce((a, b) => (a.senha < b.senha ? a : b));
  //   } else if (senhasNormais.length > 0) {
  //     // Se não houver preferenciais, pega a senha normal com o menor número
  //     proximaSenha = senhasNormais.reduce((a, b) => (a.senha < b.senha ? a : b));
  //   } else {
  //     setSenhaChamada(null); // Se não houver nenhuma senha na fila
  //     alert("A fila está vazia!");
  //     return;
  //   }

  //   // Define a próxima senha chamada
  //   setSenhaChamada(proximaSenha);

  //   // Remove a senha chamada da lista de senhas
  //   setSenhas(senhas.filter(senha => senha.id !== proximaSenha.id));
  // }

  return (

    <div className="conteudo-container">

    <Header/>

      <div className='conteudo-row'>
        <div className='conteudoUm'>
          <img className="Farmacia_placa" src="public/imagens/farmarcia-placa.png" alt="Placa de farmácia" />
          <p className='fonteUm'>
            Estamos animados em anunciar que a Farmacia popular passou por uma transformação completa! Sob nova direção, nossa farmácia está pronta para oferecer um atendimento renovado e um ambiente moderno.
            <span className='fonteDois'>Os 10 primeiros clientes que realizarem compras acima de 100 Reais ganham uma super camiseta.</span>
          </p>
        </div>

        <div className='index-conteudoDois'>
          <img className="Farmacia_camiseta" src="public/imagens/farmarcia-camiseta.png" alt="Camiseta da farmácia" />
        </div>
      </div>

      <div className='ConteudoTres'>
      

        <p className='fonte_Promoçôes'>Você toma diversos remédios por dia?<br />
          <span>Receba seus medicamentos organizados por dia e por hora.</span>
          <Navbar className="navbar" />
        </p>
        
        {/* <div className="DisplaySenha">
          <select value={tipoSenhaSelecionada} onChange={(e) => setTipoSenhaSelecionada(e.target.value)}>
            <option value="Normal">Senha Normal</option>
            <option value="Preferencial">Senha Preferencial</option>
          </select>
          <button onClick={GerarSenha}>Gerar Senha</button>
          <ul>
            <li>


              
            </li>



          </ul>
          <button onClick={ChamarSenhaNoBalcao}>Chamar Próxima Senha</button>
        </div> */}

        {/* {senhaChamada && (
          <div className="senhaChamadaDisplay">
            <h3>Senha Chamada:</h3>
            <p>{senhaChamada.senha} - {senhaChamada.tipo}</p>
          </div>
        )}

        {senhas.length === 0 && <p>A fila está vazia!</p>} */}
       
      </div>
    </div>
  );
}

export default Conteudo;
