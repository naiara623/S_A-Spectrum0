import Navbar from '../componentes/Navbar'
import './Tela_Profissional.css'

function Tela_Profissional2() {
  return (
    <div>
      <Navbar />
        
        <div className='A'></div>

        <div className='B'>

           <div className='C'> 

               <div className='D'>
                <div>
                  <img className='Sideli' src="sedele2.0.jpg" alt="Sideli cardoso" />
              {/* <Imagem_Profissional/> */}
                </div>


                    <div>
                        <label className='label-nomeProfissional'>
                        Nome: Bianca kiers
                      </label>

                          <div>
                            <label className='label-GeneroProfissional'>
                              Gênero:Feminino
                            </label>
                            </div>

                            <div>
                            <label className='label-idadeProfissional'>
                              Idade:35 Anos
                            </label>
                            </div>


                    </div>
               </div>

               <div className='E'>

                <div className='F'>

                   <p className='label-p-Infor-contato'>Informações Para Contato</p>

                    <div className='div-do-telefone'>
                        <label className='label-teleProfissional'>
                        Telefone:(42) 99922
                      </label>
                    </div>

                    <div className='div-do-email'>
                    
                        <label className='label-emailProfissional'>
                        Email: bbkiers@gmail.com
                        {isEditing ? (
                          <input
                          className='input-emailProfissional'
                            type="email"
                            value={EmailProfissional} // Campo pré-preenchido com os dados do estado
                            onChange={(e) =>setEmailProfissional(e.target.value)}
                          />
                        ) : (
                          <span>{EmailProfissional|| 'Não definido'}</span> // Mostra "Não definido" se estiver vazio
                        )}
                      </label>
                    </div>
                </div>


                  <div className='G'>
                     <p className='Breve-descriçao'>Uma Breve Descrição</p>
                         <h4 className='tex' >Atuo nas areas de fisioterapia respiratoria e fisioterapia em sono. Reabilito pacientes com disturbios respiratorios e não respiratorios do sono, como apneia obstrutiva do sono, insonia, bruxismo, e sindrome das pernas inquietas</h4>

                  </div>
               </div>


           </div>
        </div>

    </div>
  )
}

export default Tela_Profissional2
