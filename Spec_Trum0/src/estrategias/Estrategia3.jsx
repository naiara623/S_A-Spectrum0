import React from 'react'
import './Estrategia3.css'
import { Link } from 'react-router-dom'
import Navbar from '../componentes/Navbar'

function Estrategia3() {
  return (
    <div>
  {<Navbar/>}
    <div class="tela3">
<div class="barra-estrategias">
    
 <div className='cor-estrategias3'>
 <div className='coluna-estrategia3'>
 <h3 className='estrategias-para3'>Estratégias para:</h3>
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

<div className="text-tela3">
  <h2 className='text1-tela3'>Rotas diferentes do previsto</h2>
 <p className='text2-tela3'>Lidar com rotas diferentes do previsto pode ser desafiador para pessoas autistas, mas existem diversas estratégias que podem ajudar:</p>
</div>
 
            <Link to={'/PreparacaoAntecipada1'}><button className='Preparacao3'><h4 className="pe3">Preparação antecipada</h4></button><br /></Link>
            <Link to={'/MapasEAplicativosDeNavegacao2'}><button className='mapa'><h4 className="p2e3">Mapas e aplicativos de navegação</h4></button><br /></Link>
            <Link to={'/HistoriasSociais'}><button className='historia'><h4 className="p3e3">Historias Socias</h4></button><br /></Link>
            <Link to={'/RotasAlternativasConhecidas4'}><button className='rotas'><h4 className="p4e3">Rotas alternativas conhecidas</h4></button><br /></Link>
            <Link to={'/TécnicasDeRelaxamento5'}><button className='tectnicas'><h4 className="p5e3">Tecnicas de relaxamento</h4></button><br /></Link>
            <Link to={'/ItensDeConforto'}><button className='itens'><h4 className="p6e3">Itens de conforto</h4></button><br /></Link>
            <Link to={'/FlexibilidadeGradual7'}><button className='Flexbilidade'><h4 className="p7e3">Flexbilidade gradual</h4></button><br /></Link>
            <Link to={'/ReforcoPositivo8'}><button className='Reforço'><h4 className="p8e3">Reforço positivo</h4></button><br /></Link>
            <Link to={'/SuporteEmocional10'}><button className='Suporte'><h4 className="p9e3">Suporte emocional</h4></button><br /></Link>
            <Link to={'/TreinamentoDeSituacoes10'}><button className='Treinamento'><h4 className="p10e3">Treinamento de situações</h4></button><br /></Link>

 


<div className="ppp3">
  <p>Essas estratégias podem ser adaptadas para atender às necessidades individuais de cada pessoa autista, já que cada indivíduo é único e pode responder de maneira diferente às mudanças.</p>
</div>
 
 </div>
 

 </div>
</div>
  )
}

export default Estrategia3
