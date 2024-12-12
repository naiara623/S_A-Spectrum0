import React from "react";
import './Tela_Principal.css'
import { Link } from 'react-router-dom'
import Navbar from "../componentes/Navbar";

function Tela_Principal() {
  return (
  <div className='Bore'>
        <Navbar />

         <div className='carrossel'>
              <div className="div-carrossel">
                 <img className="carrossel_img" src="cornovafrase.png" alt="" />
                </div>
         </div>

             <p className="TEXTOP">ESPECIALISTAS</p>

          
              <div className='profissionais'>  

              
              
                      <div className="containe_profissional1">
                           <img className="img-profissional1" src="sedele2.0.jpg" alt="" />
                              <p className="nome_Milena">Sideli Cardoso</p>
                             <h1 className="Nome_profissãos">Neuropsicopedagoga </h1>
        <Link to={'/perfildeprofissional'}><button className="Button_profissionals"><h4 className="SaiButon">Saiba mais</h4></button></Link> 
                        </div>

                        <div className="containe_profissional1">
                            <img className="img-profissional2" src="Tais.jpg" alt="" />
                            <p className="nomes_Gustavo">Thais Agostinho</p>
                            <h1 className="Nome_profissãoG">Psicopedagoga</h1>
        <Link to={'/perfildeprofissional2'}><button className="Button_profissional3"><h4 className="SaiButon">Saiba mais</h4></button></Link> 
                        </div>

                        <div className="containe_profissional1">
                            <img className="img-profissional3" src="tatiana2.jpg" alt="" />
                            <p className="nomes_Luciana">Tatiana nunes</p>
                            <h1 className="Nome_profissãoL">Fonoaudióloga</h1>
                             <button className="Button_profissionalTa"><h4 className="SaiButon">Saiba mais</h4></button>
                        </div>

                          <div className="containe_profissional1">
                              <img className="img-profissional4" src="Ruan.jpg" alt="" />
                              <p className="nomes_Lilia">Ruan Souza</p>
                              <h1 className="Nome_profissãoR">Fisioterapeuta</h1>
                             <button className="Button_profissionalr"><h4 className="SaiButon">Saiba mais</h4></button>
                          </div>
                 
                              <div className="containe_profissional2">
                                  <img className="img-profissional5" src="bianca2.jpg" alt="" />
                                  <p className="nomes_Wanda">Bianca Kiers </p>
                                  <h1 className="Nome_profissãoB">Fisioterapeuta</h1>
                             <button className="Button_profissionalb"><h4 className="SaiButon">Saiba mais</h4></button>
                                </div>

                              <div className="containe_profissional2">
                                  <img className="img-profissional6" src="barbara.jpg" alt="" />
                                  <p className="nomes_Aghata">Bárbara Bueno</p>
                                  <h1 className="Nome_profissãoBa">Neuropsicopedagoga </h1>
                             <button className="Button_profissionalba"><h4 className="SaiButon">Saiba mais</h4></button>
                              </div>

                              <div className="containe_profissional2">
                                  <img className="img-profissional7" src="Amanda2.jpg" alt="" />
                                  <p className="nomes_James">Amanda Lopes</p>
                                  <h1 className="Nome_profissãoAm">Psicopedagoga</h1>
                             <button className="Button_profissionalam"><h4 className="SaiButon">Saiba mais</h4></button>
                              </div>

                              <div className="containe_profissional2">
                                  <img className="img-profissional8" src="joao.jpg" alt="" />
                                  <p className="nomes_Keisy">João Antônio</p>
                                  <h1 className="Nome_profissãoJ">Fisioterapeuta </h1>
                             <button className="Button_profissionalj"><h4 className="SaiButon">Saiba mais</h4></button>
                              </div>
                        

          </div>
  </div>
                
                
  )
}

export default Tela_Principal