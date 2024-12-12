import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../componentes/Navbar';
import './Tela_Perfil.css';
import axios from 'axios';

function Perfil() {
  const [name, setName] = useState('');
  const [genero, setGenero] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [tea, setTEA] = useState('');
  const [descorberto, setDescorberto] = useState('');
  const [necessidades, setNecessidades] = useState('');
  const [interesses, setInteresses] = useState('');
  const [profissionais, setProfissionais] = useState('');
  const [dificuldades, setDificuldades] = useState('');
  const [comorbidade, setComorbidade] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const emailUsuario = localStorage.getItem('userEmail');
    if (emailUsuario) {
      axios.get(`http://localhost:3000/usuarios/${emailUsuario}`)
        .then((response) => {
          const data = response.data;
          setName(data.nome_usuario);
          setGenero(data.genero);
          setIdade(data.idade);
          setEmail(data.email_usuario);
          setTelefone(data.telefone);
          setTEA(data.tea);
          setDescorberto(data.descorberto);
          setNecessidades(data.necessidades);
          setInteresses(data.interesses);
          setProfissionais(data.profissionais);
          setDificuldades(data.dificuldades);
          setComorbidade(data.comorbidade);
        })
        .catch((error) => console.error('Erro ao carregar perfil:', error));
    }
  }, []);

  const saveToLocalStorage = () => {
    const userProfile = { name, genero, email, idade, telefone, tea, descorberto, necessidades, interesses, profissionais, dificuldades, comorbidade };
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
  };

  const toggleEditing = () => {
    if (isEditing) {
      saveToLocalStorage();
    }
    setIsEditing(!isEditing);
  };

  const deleteUser = () => {
    const emailUsuario = localStorage.getItem('userEmail');
    if (emailUsuario) {
      axios.delete(`http://localhost:3000/usuarios/${emailUsuario}`)
        .then((response) => {
          alert(response.data.message);
          localStorage.removeItem('userEmail');
          navigate('/');
        })
        .catch((error) => {
          console.error('Erro ao deletar o usuário:', error);
          alert('Erro ao deletar o usuário');
        });
    }
  };

  return (
    <div className='body-perfil'>
      <Navbar />

      <div className='amarelo'>
        <div className='laranja'></div>
        <div className='azul'></div>
        <div className='rosa'></div>
        <div className='roxo'></div>
      </div>

      <div className='vermelho'>
        <img className='foto-u' src="do-utilizador.png" alt="" />

        <label className='label-nome'>
          Nome:
          {isEditing ? (
            <div className="formContainer">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite algo..."
              />
              <span className="underline" />
            </div>
          ) : (
            <span>{name || 'Não definido'}</span>
          )}
        </label>

        <label className='label-idade'>
          Idade:
          {isEditing ? (
            <div className="formContainer2">
              <input
                type="number"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
              />
            </div>
          ) : (
            <span>{idade || 'Não definida'}</span>
          )}
        </label>

        <label className='label-genero'>
          Gênero:
          {isEditing ? (
            <div className="formContainer3">
              <select
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Não Binário">Não Binário</option>
                <option value="Prefiro não informar">Prefiro não informar</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          ) : (
            <span>{genero || 'Não definido'}</span>
          )}
        </label>
      </div>

      <div className='marrom'>
        <div className='informa-contato-perfil'>INFORMAÇÃO DE CONTATO</div>

        <div className='div-telefone-perfil'>
          <label className='label-telefone'>
            Telefone:
            {isEditing ? (
              <div className="formContainer4">
                <input
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>
            ) : (
              <span>{telefone || 'Não definido'}</span>
            )}
          </label>
        </div>

        <div className="email-perfil">
          <label className='label-email'>
            Email:
            {isEditing ? (
              <div className="formContainer5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            ) : (
              <span>{email || 'Não definido'}</span>
            )}
          </label>
        </div>

        <button className='button-editar-perfil' onClick={toggleEditing}>
          {isEditing ? 'Salvar' : 'Editar'}
        </button>

        <button className='button-excluir-perfil' onClick={deleteUser}>
          Excluir
        </button>
      </div>

      <div className='preto'>
        <div className='containes-de-perguntas'>
          <p className='BREVE_DESCRIÇÃO'>BREVE DESCRIÇÃO SOBRE O USÚARIO</p>

          <div className='nivela-TEA'>
            <label className='l1-perfil'>
              Qual o nivelamento do seu TEA?
              {isEditing ? (
                <div className="formContainer6">
                  <input
                    type="text"
                    value={tea}
                    onChange={(e) => setTEA(e.target.value)}
                  />
                </div>
              ) : (
                <span>{tea || 'Não definido'}</span>
              )}
            </label>
          </div>

          <div className='foi-quando'>
            <label className='l2-perfil'>
              Quando foi descoberto?
              {isEditing ? (
                <div className="formContainer7">
                  <input
                    type="date"
                    value={descorberto}
                    onChange={(e) => setDescorberto(e.target.value)}
                  />
                </div>
              ) : (
                <span>{descorberto || 'Não definido'}</span>
              )}
            </label>
          </div>

          <div className='maiores-necessidades'>
            <label className='l3-perfil'>
              Quais as suas maiores necessidades?
              {isEditing ? (
                <div className="formContainer8">
                  <input
                    type="text"
                    value={necessidades}
                    onChange={(e) => setNecessidades(e.target.value)}
                  />
                </div>
              ) : (
                <span>{necessidades || 'Não definido'}</span>
              )}
            </label>
          </div>

          <div className='seus-interesses'>
            <label className='l4-perfil'>
              Quais são seus interesses?
              {isEditing ? (
                <div className="formContainer9">
                  <input
                    type="text"
                    value={interesses}
                    onChange={(e) => setInteresses(e.target.value)}
                  />
                </div>
              ) : (
                <span>{interesses || 'Não definido'}</span>
              )}
            </label>
          </div>

          <div className='quais-profissionais'>
            <label className='l5-perfil'>
              Quais profissionais já o acompanham?
              {isEditing ? (
                <div className="formContainer10">
                  <input
                    type="text"
                    value={profissionais}
                    onChange={(e) => setProfissionais(e.target.value)}
                  />
                </div>
              ) : (
                <span>{profissionais || 'Não definido'}</span>
              )}
            </label>
          </div>

          <div className='quais-dificuldades'>
            <label className='l6-perfil'>
              Quais dificuldades já superou?
              {isEditing ? (
                <div className="formContainer11">
                  <input
                    type="text"
                    value={dificuldades}
                    onChange={(e) => setDificuldades(e.target.value)}
                  />
                </div>
              ) : (
                <span>{dificuldades || 'Não definido'}</span>
              )}
            </label>
          </div>

          <div className='alguma-comorbidade'>
            <label className='l7-perfil'>
              Tem alguma comorbidade?
              {isEditing ? (
                <div className="formContainer12">
                  <select
                    value={comorbidade}
                    onChange={(e) => setComorbidade(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    <option value="SIM">SIM</option>
                    <option value="NÃO">NÃO</option>
                  </select>
                </div>
              ) : (
                <span>{comorbidade || 'Não definido'}</span>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
