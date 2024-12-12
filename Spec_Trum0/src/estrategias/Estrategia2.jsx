import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../componentes/Navbar'
import './Estrategia2.css'

function Estrategia2() {
  return (
    <div>
    {<Navbar />}
    <div class="tela2">
<div class="barra-estrategias">
    
 <div className='cor-estrategias2'>
 <div className='coluna-estrategia2'>
 <h3 className='estrategias-para2'>Estratégias para:</h3>
 <div className='todas-colunas'>
              <Link to={'/estrategia1'}><button className='estrategia1' ><h4 className="s1e1">Sons Altos</h4></button></Link><br /><br /> 
              <Link to={'/estrategia2'}><button className='estrategia2' ><h4 className="s2e1">Mudança na Rotina</h4></button><br /><br /></Link>
              <Link to={'/estrategia3'}><button className='estrategia3' ><h4 className="s3e1">Rotas diferentes do previsto</h4></button><br /><br /></Link>
              <Link to={'/estrategia4'}><button className='estrategia4' ><h4 className="s4e1">Muitas pessoas em um ambiente</h4></button><br /><br /></Link>
              <div className='ppp1'>
                <p>Cada pessoa é única, então pode ser necessário experimentar diferentes estratégias para encontrar o que funciona melhor em cada caso.</p>
              </div>
            </div>
 </div>
 </div>

<div className="text-tela2">
  <h2 className='text1-tela2'>Mudanças na Rotina</h2>
 <p className='text2-tela2'>Lidar com mudanças de rotina pode ser desafiador para pessoas autistas, mas existem diversas estratégias que podem ajudar:</p>
</div>
 

 <button className='Preparacao2'><h4 className="p">Preparação antecipada</h4></button><br/>
 <button className='vizualizar'><h4 className="p2">Visualização e roteiros</h4></button><br/>
 <button className='manter'><h4 className="p3">Manter elementos constantes</h4></button><br/>
 <button className='dividir'><h4 className="p4">Dividir em etapas</h4></button><br/>
 <button className='historias'><h4 className="p5">Histórias sociais</h4></button><br/>
 <button className='Tecnicas'><h4 className="p6">Técnicas de relaxamento</h4></button><br/>
 <button className='reforco'><h4 className='p7'>Reforço positivo</h4></button><br/>
 <button className='introduzir'><h4 className="p8">Introduzir flexibilidade gradualmente</h4></button><br/>
 <button className='suporte'><h4 className="p9">Suporte emocional</h4></button><br/>
 <button className='objetos'><h4 className="p10">Objetos de conforto</h4></button><br/>
 


<div className="ppp2">
  <p>Essas estratégias podem ser adaptadas para atender às necessidades individuais de cada pessoa autista, já que cada indivíduo é único e pode responder de maneira diferente às mudanças.</p>
</div>
 
 </div>
 

 </div>
 </div>
   )
 }
 export default Estrategia2
