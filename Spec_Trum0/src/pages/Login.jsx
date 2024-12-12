import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios'; // Importando o axios

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [Message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login', {
                email_usuario: email,
                senha_usuario: password
            });

            const data = response.data;

            if (response.status !== 200) {
                setErrorMessage(data.error || 'Erro ao fazer login.');
                return;
            }

            setMessage(`Bem-vindo(a), ${data.user.nome_usuario}!`);
            navigate('/telaprincipal'); // Redireciona para a página principal
        } catch (err) {
            setErrorMessage('Erro no servidor. Tente novamente mais tarde.');
        }
    };

    return (
        <div className="body-login">
            <div className="container-1">
                <div className="container4">
                    <h2 className="kk">Login</h2>
                    <br />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {Message && <p className="error-message">{Message}</p>}
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <label className="label">Nome de usuário ou Email</label>
                            <input
                                autoComplete="off"
                                className="input"
                                type="email"
                                placeholder="seu.email@gmail.com ou Nome Completo"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <br />
                        <div className="input-group">
                            <label className="label">Senha</label>
                            <input
                                autoComplete="off"
                                className="input"
                                type="password"
                                placeholder="Mínimo 5 caracteres"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <br />
                        <button className="button1" type="submit">Entrar</button>
                    </form>
                    <br />
                    <div className="entrar">
                        <Link to="/cadastro" className="tim"><h4>Não tem conta? Cadastrar</h4></Link>
                        <Link to="/esqueci-a-senha" className="tim1"><h4>Esqueceu a senha? Resetar</h4></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
