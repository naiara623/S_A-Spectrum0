const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',
    database: 'SPECTRUM', // Nome da sua database
    password: 'senai', // Substitua pela sua senha
    port: 5432, // Porta padrão do PostgreSQL
});

// Rota para buscar todos os usuários
app.get('/usuarios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Usuario');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

// Rota para buscar um usuário por email
app.get('/usuarios/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const result = await pool.query('SELECT * FROM Usuario WHERE email_usuario = $1', [email]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
});

// Rota para adicionar um novo usuário
app.post('/usuarios', async (req, res) => {
    const { nome_usuario, email_usuario, senha_usuario, id_agendamento } = req.body;

    if (!nome_usuario || !email_usuario || !senha_usuario || !id_agendamento) {
        return res.status(400).json({ error: 'Preencha todos os campos corretamente.' });
    }

    try {
        // Verificar duplicação de email
        const emailCheck = await pool.query('SELECT * FROM Usuario WHERE email_usuario = $1', [email_usuario]);
        if (emailCheck.rows.length > 0) {
            return res.status(400).json({ error: 'Email já cadastrado.' });
        }

        const result = await pool.query(
            'INSERT INTO Usuario (nome_usuario, email_usuario, senha_usuario, id_agendamento) VALUES ($1, $2, $3, $4) RETURNING *',
            [nome_usuario, email_usuario, senha_usuario, id_agendamento]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar usuário' });
    }
});

// Rota para atualizar dados de um usuário
app.put('/usuarios/:email', async (req, res) => {
    const { email } = req.params;
    const { nome_usuario, senha_usuario, id_agendamento } = req.body;

    try {
        const result = await pool.query(
            'UPDATE Usuario SET nome_usuario = $1, senha_usuario = $2, id_agendamento = $3 WHERE email_usuario = $4 RETURNING *',
            [nome_usuario, senha_usuario, id_agendamento, email]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});

// Rota para deletar um usuário
app.delete('/usuarios/:email', async (req, res) => {
    const { email } = req.params;

    try {
        const result = await pool.query('DELETE FROM Usuario WHERE email_usuario = $1 RETURNING *', [email]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        res.json({ message: 'Usuário deletado com sucesso.' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
});

// Rota para autenticação do login
app.post('/login', async (req, res) => {
    const { email_usuario, senha_usuario } = req.body;

    if (!email_usuario || !senha_usuario) {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }

    try {
        const result = await pool.query('SELECT * FROM Usuario WHERE email_usuario = $1', [email_usuario]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        const user = result.rows[0];
        if (user.senha_usuario !== senha_usuario) {
            return res.status(400).json({ error: 'Senha incorreta.' });
        }

        res.status(200).json({ message: 'Login bem-sucedido', user });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro no servidor' });
    }
});

// Rota para redefinição de senha
app.put('/usuarios/senha', async (req, res) => {
    const { email_usuario, nova_senha } = req.body;

    if (!email_usuario || !nova_senha) {
        return res.status(400).json({ error: 'Preencha todos os campos.' });
    }

    try {
        const result = await pool.query(
            'UPDATE Usuario SET senha_usuario = $1 WHERE email_usuario = $2 RETURNING *',
            [nova_senha, email_usuario]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        res.status(200).json({ message: 'Senha redefinida com sucesso.' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro no servidor.' });
    }
});

// Rota para criar um agendamento
app.post('/agendamentos', async (req, res) => {
    const { data, horario, descricao, usuario_id } = req.body;

    if (!data || !horario || !usuario_id) {
        return res.status(400).json({ error: 'Preencha todos os campos obrigatórios.' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO Agendamento (data, horario, descricao, usuario_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [data, horario, descricao, usuario_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao criar agendamento.' });
    }
});

// Rota para buscar agendamentos por data
app.get('/agendamentos/:data', async (req, res) => {
    const { data } = req.params;

    try {
        const result = await pool.query('SELECT * FROM Agendamento WHERE data = $1', [data]);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar agendamentos.' });
    }
});

// Rota para buscar profissionais
app.get('/profissionais', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Profissionais');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar profissionais' });
    }
});

// Rota para atualizar os dados de um profissional
app.put('/profissionais/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, telefone, email, genero, idade } = req.body;

    try {
        const result = await pool.query(
            'UPDATE Profissionais SET nome = $1, telefone = $2, email = $3, genero = $4, idade = $5 WHERE id = $6 RETURNING *',
            [nome, telefone, email, genero, idade, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Profissional não encontrado.' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar profissional' });
    }
});

// Rota para buscar um profissional por ID
app.get('/profissionais/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM Profissionais WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Profissional não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar profissional' });
    }
});

// Rota para deletar um profissional
app.delete('/profissionais/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('DELETE FROM Profissionais WHERE id = $1 RETURNING *', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Profissional não encontrado.' });
        }

        res.json({ message: 'Profissional deletado com sucesso.' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar profissional' });
    }
});

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});