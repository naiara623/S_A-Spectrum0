import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Esqueci_A_Senha.css';
import axios from 'axios'; // Importando o axios

function EsqueciASenha() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false); // Controla visibilidade da senha
    const navigate = useNavigate();

    const toggleSenha = () => {
        setMostrarSenha(!mostrarSenha); // Alterna visibilidade da senha
    };

    const handlePasswordReset = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setErrorMessage('As senhas não coincidem. Por favor, tente novamente.');
            return;
        }

        try {
            const response = await axios.put('http://localhost:3000/usuarios/senha', {
                email_usuario: email,
                nova_senha: newPassword,
            });

            if (response.status === 200) {
                alert('Senha redefinida com sucesso!');
                navigate('/login'); // Redireciona para a página de login
            } else {
                setErrorMessage(response.data.error || 'Erro ao redefinir a senha.');
            }
        } catch (err) {
            setErrorMessage('Erro no servidor. Tente novamente mais tarde.');
        }
    };

    return (
        <div className="body-senha">
            <div className="conteiner-senha">
                <h1 className="modificar-s">Modificar Senha</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={handlePasswordReset}>
                    <label>Digite seu email</label>
                    <input
                        autoComplete="off"
                        name="email"
                        id="email"
                        className="input"
                        type="email"
                        placeholder="seu.email@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br /><br />

                    <label>Digite sua nova senha</label>
                    <div className="olho">
                        <input
                            autoComplete="off"
                            name="newPassword"
                            id="newPassword"
                            className="input"
                            type={mostrarSenha ? 'text' : 'password'}
                            placeholder="Mínimo 5 caracteres"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <span onClick={toggleSenha}>
                            {mostrarSenha ? (
                                <img className="har" src="../visible.png" alt="Mostrar senha" />
                            ) : (
                                <img className="har" src="../invisible.png" alt="Ocultar senha" />
                            )}
                        </span>
                    </div>
                    <br />

                    <label>Confirme sua nova senha</label>
                    <div className="olho">
                        <input
                            className="input"
                            autoComplete="off"
                            name="confirmPassword"
                            id="confirmPassword"
                            type={mostrarSenha ? 'text' : 'password'}
                            placeholder="Confirme sua nova senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <span onClick={toggleSenha}>
                            {mostrarSenha ? (
                                <img className="har" src="../visible.png" alt="Mostrar senha" />
                            ) : (
                                <img className="har" src="../invisible.png" alt="Ocultar senha" />
                            )}
                        </span>
                    </div>
                    <br />

                    <button className="demetra" type="submit">
                        Confirmar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EsqueciASenha;
