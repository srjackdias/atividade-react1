import React, { useState } from 'react';
import './Senhas.css';



function Senhas() {
  // Estados para controlar as senhas e a senha chamada
  const [senhas, setSenhas] = useState([]);
  const [tipoSenhaSelecionada, setTipoSenhaSelecionada] = useState("Normal");
  const [senhaChamada, setSenhaChamada] = useState(null);

  // Função para gerar uma nova senha
  function GerarSenha() {
    let novaSenha = {
      id: Date.now(),
      tipo: tipoSenhaSelecionada,
      senha: Math.floor(Math.random() * 10000) // Gera um número de 0 a 9999
    };

    // Adiciona a nova senha à lista
    setSenhas(prevSenhas => [...prevSenhas, novaSenha]);

    // Log para verificar se a nova senha foi gerada
    console.log("Senha gerada:", novaSenha);
  }

  // Função para chamar a próxima senha
  function ChamarSenhaNoBalcao() {
    if (senhas.length === 0) {
      alert("A fila está vazia!"); // Informar o atendente
      return;
    }

    // Filtra as senhas preferenciais e normais
    const senhasPreferenciais = senhas.filter(senha => senha.tipo === "Preferencial");
    const senhasNormais = senhas.filter(senha => senha.tipo === "Normal");

    let proximaSenha;

    // Verifica se há senhas preferenciais
    if (senhasPreferenciais.length > 0) {
      // Ordena as senhas preferenciais pelo número
      proximaSenha = senhasPreferenciais.sort((a, b) => a.senha - b.senha)[0];
    } else if (senhasNormais.length > 0) {
      // Se não houver preferenciais, pega a senha normal com o menor número
      proximaSenha = senhasNormais.sort((a, b) => a.senha - b.senha)[0];
    }

    // Define a próxima senha chamada
    setSenhaChamada(proximaSenha);

    // Remove a senha chamada da lista de senhas
    setSenhas(senhas.filter(senha => senha.id !== proximaSenha.id));
  }

  return (

    
    <div className='senhas-container'>


<div className='titulos'>
      <h1 className='FontePagina'>Escolha sua senha Amigo cliente</h1>
      <p className='FontePaginaDois'>Rapido antes que esvazie...</p>
      </div>
   
      <div className="senhas-DisplaySenha">
        <select value={tipoSenhaSelecionada} onChange={(e) => setTipoSenhaSelecionada(e.target.value)}>
          <option value="Normal">Senha Normal</option>
          <option value="Preferencial">Senha Preferencial</option>
        </select>
        <button className='bntUm' onClick={GerarSenha}>Gerar Senha</button>
        <button className="bntDois" onClick={ChamarSenhaNoBalcao}>Chamar Próxima Senha</button>
      </div>

      <div className='senha-conteudo-Dois'>
        {senhas.length === 0 ? (
          <p>A fila está vazia!</p> // Mensagem se a fila estiver vazia
        ) : (
          <ul>
            {senhas.map(senha => (
              <li key={senha.id}>
                Senha: {senha.senha} - Tipo: {senha.tipo}
              </li>
            ))}
          </ul>
        )}
        
        {senhaChamada && (
          <div>
            <h2>Senha Chamada:</h2>
            <p>
              Senha: {senhaChamada.senha} - Tipo: {senhaChamada.tipo}
            </p>
          </div>
        )}
      </div>
      
     
    </div>
  );
}

export default Senhas;
