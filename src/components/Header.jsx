import './Header.css'
import { Loop } from './icons/loop';


function Hearder() {

  const iconBig = {


    width: "30px",
    height:"30px"
  
    
  }

  return (
    <div className="container">
      <div className="div1">
          <img className="Farmacia_popular" src="public/imagens/farmarcia-logo-pq.png" alt = "fotos do sonic"/>
          <h1 className='titulo1'>Farmarcia Popular</h1>
          <input className="CampoPesquisa"placeholder='Pesquisa'/>
          <Loop style={iconBig} color="#ffffff" className="logo"/>
      </div>

      <div className="div2">
        <h1 className='titulo2'>Home</h1>
        <h1 className='titulo3'>Noticias</h1>
        <h1 className='titulo4'>Projetos</h1>
      </div>
      
    </div>
  );
}

export default Hearder
