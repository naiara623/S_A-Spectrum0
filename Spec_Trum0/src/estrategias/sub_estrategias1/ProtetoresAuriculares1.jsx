import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../componentes/Navbar'
import './Subestrategia1.css'

function ProtetoresAuriculares() {
  return (
    <div >
    {<Navbar />}

{/* <div className='coluna-estrategia'>
  <h3 className='estrategias-para'>Estratégias para:</h3>
  <div className='todas-colunas'>
    <Link to={'/estrategia1'}><button className='estrategia1'  ><h4 className="s1e1">Sons Altos</h4></button></Link><br /><br /> 
    <Link to={'/estrategia2'}><button className='estrategia2' ><h4 className="s2e1">Mudança na Rotina</h4></button><br /><br /></Link>
    <Link to={'/estrategia3'}><button className='estrategia3' ><h4 className="s3e1">Rotas diferentes do previsto</h4></button><br /><br /></Link>
    <Link to={'/estrategia4'}><button className='estrategia4' ><h4 className="s4e1">Muitas pessoas em um ambiente</h4></button><br /><br /></Link>
</div> */}

<div className='container'>
 
<Link to={'/ProtetoresAuriculares'}><button className='protetores'><h4 className="pe1">Protetores auriculares</h4></button><br /></Link>

<div className='texto'>
<p>O autismo é um distúrbio neurológico que afeta a maneira como uma pessoa percebe o mundo e interage com os outros. Uma característica comum entre indivíduos com autismo é a hipersensibilidade sensorial, que pode incluir uma sensibilidade aumentada ao som. Isso pode levar a desconforto, estresse e até crises em ambientes barulhentos.

Protetores auriculares são uma ferramenta útil para ajudar indivíduos com autismo a lidar com a hipersensibilidade auditiva. Eles funcionam reduzindo o volume dos sons externos, permitindo que a pessoa se concentre melhor e se sinta mais confortável em ambientes ruidosos3. Isso pode ser especialmente benéfico em situações como festas, viagens de avião ou ambientes escolares barulhentos.

Benefícios:

Redução de Estresse: Ao diminuir o nível de ruído, os protetores auriculares podem ajudar a reduzir o estresse e a ansiedade.

Melhora na Concentração: Com menos distrações sonoras, a pessoa pode se concentrar melhor em tarefas escolares ou outras atividades.

Prevenção de Crises: Em alguns casos, a redução do ruído pode prevenir crises devido à hipersensibilidade auditiva.

Vídeo Recomendado:
<iframe width="572" height="322" src="https://www.youtube.com/embed/SlgOpROsqsI?si=Etx0MDh-vasFstSu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</p>
</div>
</div>
</div>


  )
}

export default ProtetoresAuriculares