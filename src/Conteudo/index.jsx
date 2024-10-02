import React from 'react';
import './index.css';

function Conteudo() {

  const { senhasNormais, setSenhasNormais } = useContext([])

  const [inputTipo, setInputTipo] = useState(0)
  const [inputSenha, setInputSenha] = useState(0)



  function GerarSenhasNormais() {
    let senhaNovaNormal = {
      id: Date.now(),
      tipo: "Normal",
      senha: Math.floor(Math.random() * 10000)
    }


    setSenhas([...senhasNormais, setSenhasNormais])

  }


  function GerarSenhasPreferencial() {
    let senhaNovaNormal = {
      id: Date.now(),
      tipo: "Preferencial",
      senha: Math.floor(Math.random() * 10000)
    }


    setSenhas([...senhasNormais, setSenhasNormais])

  }
  const abrirNovaAba = () => {
    window.open('/fofoca.html');
  };

  return (
    <div className="conteudo-container">
      <div className='conteudo-row'>
        <div className='conteudoUm'>
          <img className="Farmacia_placa" src="public/imagens/farmarcia-placa.png" alt="Placa de farmácia" />
          <p className='fonteUm'>
            Estamos animados em anunciar que a
            Farmacia popular passou por uma transformação completa! Sob nova direção, nossa farmácia está pronta para oferecer um atendimento renovado e um ambiente moderno.
            Convite para a Inauguração Junte-se a nós na nossa inauguração e conheça nossas novas instalações e serviços!
            <span className='fonteDois'>Os 10 primeiros clientes que realizarem compras acima de 100 Reais, ganham uma super camiseta.</span>
          </p>
        </div>

        <div className='conteudoDois'>
          <img className="Farmacia_camiseta" src="public/imagens/farmarcia-camiseta.png" alt="Camiseta da farmácia" />
        </div>
      </div>

      <div className='ConteudoTres'>
        <p className='fonte_Promoçôes'>Você tomar diversos remedios por dia?<br />
          <span>Receba seus medicamentos organizados por dia e por hora.</span>
        </p>


        <button onClick={abrirNovaAba} className="fofoca-link">
          #alert fofoca<br></br>clique aqui!
        </button>
      </div>
    </div>
  );
}

export default Conteudo;
