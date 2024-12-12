import React, { useState } from 'react'
import './Tela_Informacoes.css'
import "./ToggleContent.css"; // Adicione os estilos aqui
import Navbar from '../componentes/Navbar';


function Tela_Informacoes() {
const [isOpen, setIsOpen] = useState(false);
const [isOpen1, setIsOpen1] = useState(false);
const [isOpen2, setIsOpen2] = useState(false);

const toggleContent = () => {
  setIsOpen(!isOpen);
};

const toggleContent1 = () => {
  setIsOpen1(!isOpen1);
};

const toggleContent2 = () => {
  setIsOpen2(!isOpen2);
};

  return (
    <div className='body-informacoes'>
      <Navbar />
       
      <div className="container">
        <div className="content">
          <div className="main-content">
            <h2 className='TEA'>Informações sobre o TEA:</h2>

            <p className='Tra'>O TEA é um espectro, o que significa que abrange uma ampla gama de manifestações. As pessoas com TEA
              podem ter dificuldades na comunicação e na interação social, além de apresentarem comportamentos repetitivos e interesses restritos.
              O diagnóstico precoce é fundamental para que intervenções adequadas possam ser implementadas, promovendo o desenvolvimento e a qualidade de vida. <br /> <br /></p>
<div className="toggle-container">
<button className={`toggle-button ${isOpen ? "open" : ""}`} onClick={toggleContent}>
<span className='arrow'> ▶ </span>
</button><p className='aroz'>Características do TEA:</p>
      
      {isOpen && (
        <div className="content">
            <p className='Tra'> <br /> Comunicação: Algumas pessoas com TEA podem ter dificuldades na linguagem verbal e não verbal, enquanto
              outras podem ter habilidades linguísticas avançadas. <br />Interação Social: Pode haver dificuldade em compreender e responder a sinais
              ociais, como expressões faciais e gestos. <br /> Comportamentos Repetitivos*: Ações repetitivas, como balançar as mãos ou alinhar objetos,
              são comuns. <br /> Interesses Restritos: Foco intenso em tópicos específicos, como trens, números ou personagens de filmes. <br /><br /></p>
        </div>
      )}

<button className={`toggle-button ${isOpen1 ? "open1" : ""}`} onClick={toggleContent1}>
<span className='arrow'> ▶ </span>
</button><p className='aroz'>Curiosidades sobre o TEA</p>
      
      {isOpen1 && (
        <div className="content">
            <p className='Tra'> <br /> Gênios do Espectro: Muitas pessoas com TEA possuem habilidades excepcionais em áreas como matemática, música
              ou arte. Um exemplo famoso é o cientista Temple Grandin, que revolucionou a indústria de manejo de gado. <br /> Diversidade: O TEA é mais comum
              em meninos do que em meninas, mas as meninas muitas vezes são subdiagnosticadas devido a diferenças na apresentação dos sintomas. <br />
              Inclusão: A conscientização sobre o TEA tem crescido, e muitas escolas e locais de trabalho estão adotando práticas inclusivas para apoiar
              pessoas com TEA. <br /><br /></p>
        </div>
      )}
        <div className="content">
            <p className='Tra'>Cada pessoa com TEA tem um conjunto único de desafios e talentos. Com o suporte adequado, elas podem levar vidas plenas e produtivas,
              contribuindo de maneira significativa para a sociedade. A aceitação e a compreensão são fundamentais para criar um mundo mais inclusivo
              e acolhedor para todos.</p>
        </div>
      
            
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Tela_Informacoes