import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../componentes/Navbar'
import './Estrategia1.css'

function Estrategia1() {
  return (
    <div class="tela">
      {<Navbar />}

      <div>

        <div className='cor-estrategias'>
          <div className='coluna-estrategia'>
            <h3 className='estrategias-para'>Estratégias para:</h3>

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
          <div className='scrollable-colunas'></div>
          <div className='text-estrategias1'>

            <h2 className='text1'>Sons Altos</h2>
            <p className='text2'> Lidar com sons altos pode ser particularmente desafiador para pessoas autistas, mas algumas estratégias podem ajudar a <br /> minimizar o desconforto:</p>

          </div>

          <div className='colunas'>
            <Link to={'/ProtetoresAuriculares'}><button className='protetores'><h4 className="pe1">Protetores auriculares</h4></button><br /></Link>
            <Link to={'/EspaçosTranquilos2'}><button className='Espa-Tranq'><h4 className="p2e1">Espaços tranquilos</h4></button><br /></Link>
            <Link to={'/Planejamento3'}><button className='Planejamento1'><h4 className="p3e1">Planejamento</h4></button><br /></Link>
            <Link to={'/Comunicacao4'}><button className='Comunicaçãos'><h4 className="p4e1">Comunicação</h4></button><br /></Link>
            <Link to={'/TécnicasDeRelaxamento5'}><button className='tec-relax'><h4 className="p5e1">Técnicas de relaxamento</h4></button><br /></Link>
            <Link to={'/MúsicaOuRuídoBranco6'}><button className='Mús-Rui-Branco'><h4 className="p6e1">Técnicas de relaxamento</h4></button><br /></Link>
            <Link to={'/TreinamentoDeDessensibilização7'}><button className='Treinamento-Dessens'><h4 className="p7e1">Treinamento de dessensibilização</h4></button><br /></Link>

          </div>



        </div>
      </div>



    </div>

  )
}

export default Estrategia1