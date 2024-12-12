import React from 'react'
import Navbar from '../componentes/Navbar'
import './Estrategia4.css'
import { Link } from 'react-router-dom'

function Estrategia4() {
  return (
    <div>
  {<Navbar/>}
    <div class="tela4">
<div class="barra-estrategias">
    
 <div className='cor-estrategias4'>
 <div className='coluna-estrategia4'>
 <h3 className='estrategias-para4'>Estratégias para:</h3>
 <div className='todas-colunas'>
              <Link to={'/estrategia1'}><button className='estrategia1'  ><h4 className="s1e1">Sons Altos</h4></button></Link><br /><br /> 
              <Link to={'/estrategia2'}><button className='estrategia2' ><h4 className="s2e1">Mudança na Rotina</h4></button><br /><br /></Link>
              <Link to={'/estrategia3'}><button className='estrategia3' ><h4 className="s3e1">Rotas diferentes do previsto</h4></button><br /><br /></Link>
              <Link to={'/estrategia4'}><button className='estrategia4' ><h4 className="s4e1">Muitas pessoas em um ambiente</h4></button><br /><br /></Link>
              <div className='ppp1'>
                <p>Cada pessoa é única, então pode ser necessário experimentar diferentes estratégias para encontrar o que funciona melhor em cada caso.</p>
              </div>
            </div>
 </div>
 </div>

<div className="text-tela4">
  <h2 className='text1-tela4'>Muitas pessoas em um ambiente</h2>
 <p className='text2-tela4'>Lidar com muitas pessoas em um ambiente pode ser desafiador para pessoas autistas, mas existem diversas estratégias que podem ajudar:</p>
</div>
 
            <Link to={'/PreparacaoAntecipada1'}><button className='Planejamento'><h4 className="pe4">Planejamento antecipado</h4></button><br /></Link>
            <Link to={'/MapasEAplicativosDeNavegacao2'}><button className='Companheiro'><h4 className="p2e4">Companheiro de apoio</h4></button><br /></Link>
            <Link to={'/HistoriasSociais'}><button className='Espaços'><h4 className="p3e4">Espaços de refugios</h4></button><br /></Link>
            <Link to={'/RotasAlternativasConhecidas4'}><button className='Protetores'><h4 className="p4e4">Protetores oculares</h4></button><br /></Link>
            <Link to={'/TécnicasDeRelaxamento5'}><button className='Comunição'><h4 className="p5e4">Comunição prévia</h4></button><br /></Link>
            <Link to={'/ItensDeConforto'}><button className='Tempo'><h4 className="p6e4">Tempo limitado</h4></button><br /></Link>
            <Link to={'/FlexibilidadeGradual7'}><button className='Rotina'><h4 className="p7e4">Rotina e previsibilidade</h4></button><br /></Link>
            <Link to={'/ReforcoPositivo8'}><button className='Interresses'><h4 className="p8e4">Interresses especiais</h4></button><br /></Link>
            <Link to={'/SuporteEmocional10'}><button className='FeedBack'><h4 className="p9e4">FeedBack positivo</h4></button><br /></Link>


<div className="ppp4">
  <p>Essas estratégias podem ser adaptadas para atender às necessidades individuais de cada pessoa autista, já que cada indivíduo é único e pode responder de maneira diferente às mudanças.</p>
</div>
 
 </div>
 

 </div>
</div>
  )
}

export default Estrategia4
