import React, { useEffect, useState } from 'react';
import './Tela_Profissional.css';
import Navbar from '../componentes/Navbar';
import axios from 'axios'; // Importando o axios

function Tela_Profissional() {
  const [NomeProfissional, setNameProfissional] = useState('');
  const [teleProfissional, setteleProfissional] = useState('');
  const [EmailProfissional, setEmailProfissional] = useState('');
  const [GeneroProfissional, setGeneroProfissional] = useState('');
  const [idadeProfissional, setidadeProfissional] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [idDoProfissional, setIdDoProfissional] = useState(1); // Use um id dinâmico para buscar o profissional

  // Carregar os dados do profissional ao montar o componente
  useEffect(() => {
    const fetchProfissionalData = async () => {
      const storedData = localStorage.getItem('userProfile');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setNameProfissional(parsedData.NomeProfissional || '');
        setteleProfissional(parsedData.teleProfissional || '');
        setEmailProfissional(parsedData.EmailProfissional || '');
        setGeneroProfissional(parsedData.GeneroProfissional || '');
        setidadeProfissional(parsedData.idadeProfissional || '');
      } else {
        try {
          const response = await axios.get(`http://localhost:3000/profissionais/${idDoProfissional}`);
          const data = response.data;
          setNameProfissional(data.nome);
          setteleProfissional(data.telefone);
          setEmailProfissional(data.email);
          setGeneroProfissional(data.genero);
          setidadeProfissional(data.idade);
        } catch (error) {
          console.error('Erro ao carregar os dados do profissional:', error);
        }
      }
    };

    fetchProfissionalData();
  }, [idDoProfissional]);

  // Salvar os dados no localStorage
  const saveToLocalStorage = () => {
    const userProfile = { NomeProfissional, teleProfissional, EmailProfissional, GeneroProfissional, idadeProfissional };
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
  };

  // Atualizar os dados do profissional
  const updateProfissionalData = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/profissionais/${idDoProfissional}`, {
        nome: NomeProfissional,
        telefone: teleProfissional,
        email: EmailProfissional,
        genero: GeneroProfissional,
        idade: idadeProfissional,
      });

      if (response.status === 200) {
        alert('Perfil atualizado com sucesso!');
        saveToLocalStorage(); // Salva as mudanças no localStorage
      } else {
        alert('Erro ao atualizar o perfil.');
      }
    } catch (error) {
      console.error('Erro ao atualizar os dados:', error);
      alert('Erro ao atualizar o perfil.');
    }
  };

  // Excluir os dados do profissional
  const deleteProfissionalData = async () => {
    const confirmDelete = window.confirm('Você tem certeza que deseja excluir este profissional?');
    if (confirmDelete) {
      try {
        const response = await axios.delete(`http://localhost:3000/profissionais/${idDoProfissional}`);
        if (response.status === 200) {
          alert('Profissional excluído com sucesso!');
          // Redirecionar para outra página após exclusão, se necessário
          // window.location.href = '/outro-endereco';
        } else {
          alert('Erro ao excluir o profissional.');
        }
      } catch (error) {
        console.error('Erro ao excluir os dados:', error);
        alert('Erro ao excluir o profissional.');
      }
    }
  };

  // Alterna o modo de edição
  const toggleEditing = () => {
    if (isEditing) {
      updateProfissionalData(); // Salva as mudanças
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className='Body-profi'>
      <Navbar />
      <div className='A'></div>
      <div className='B'>
        <div className='C'>
          <div className='D'>
            <div>
              <img className='Sideli' src="sedele2.0.jpg" alt="Sideli Cardoso" />
            </div>
            <div>
              <label className='label-nomeProfissional'>
                Nome:
                {isEditing ? (
                  <input
                    className='input-nomeProfissional'
                    type="text"
                    value={NomeProfissional}
                    onChange={(e) => setNameProfissional(e.target.value)}
                  />
                ) : (
                  <span>{NomeProfissional || 'Não definido'}</span>
                )}
              </label>
              <div>
                <label className='label-GeneroProfissional'>
                  Gênero:
                  {isEditing ? (
                    <input
                      className='input-GeneroProfissional'
                      type="text"
                      value={GeneroProfissional}
                      onChange={(e) => setGeneroProfissional(e.target.value)}
                    />
                  ) : (
                    <span>{GeneroProfissional || 'Não definido'}</span>
                  )}
                </label>
              </div>
              <div>
                <label className='label-idadeProfissional'>
                  Idade:
                  {isEditing ? (
                    <input
                      className='input-idadeProfissional'
                      type="number"
                      value={idadeProfissional}
                      onChange={(e) => setidadeProfissional(e.target.value)}
                    />
                  ) : (
                    <span>{idadeProfissional || 'Não definido'}</span>
                  )}
                </label>
              </div>
            </div>
          </div>

          <div className='E'>
            <div className='F'>
              <p className='label-p-Infor-contato'>Informações Para Contato</p>
              <div className='div-do-telefone'>
                <label className='label-teleProfissional'>
                  Telefone:
                  {isEditing ? (
                    <input
                      className='input-teleProfissional'
                      type="tel"
                      value={teleProfissional}
                      onChange={(e) => setteleProfissional(e.target.value)}
                    />
                  ) : (
                    <span>{teleProfissional || 'Não definido'}</span>
                  )}
                </label>
              </div>
              <div className='div-do-email'>
                <label className='label-emailProfissional'>
                  Email:
                  {isEditing ? (
                    <input
                      className='input-emailProfissional'
                      type="email"
                      value={EmailProfissional}
                      onChange={(e) => setEmailProfissional(e.target.value)}
                    />
                  ) : (
                    <span>{EmailProfissional || 'Não definido'}</span>
                  )}
                </label>
              </div>
            </div>

            <div className='G'>
              <p className='Breve-descriçao'>Uma Breve Descrição</p>
              <h4 className='tex'>
                Atuo nas áreas de fisioterapia respiratória e fisioterapia em sono. Reabilito pacientes com
                distúrbios respiratórios e não respiratórios do sono, como apneia obstrutiva do sono, insônia, bruxismo e síndrome das pernas inquietas.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tela_Profissional;
