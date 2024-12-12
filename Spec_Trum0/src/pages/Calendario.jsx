import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Calendario.css';
import Navbar from '../componentes/Navbar';

function Calendario() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [agendamentos, setAgendamentos] = useState([]);
    const [horario, setHorario] = useState('');
    const [descricao, setDescricao] = useState('');
    const [usuarioId] = useState(1); // Substitua pelo ID do usuário autenticado

    // Função para obter os dias do mês
    const getDaysInMonth = (year, month) => {
        const date = new Date(year, month, 1);
        const days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    };

    // Navegar entre meses
    const changeMonth = (direction) => {
        const newDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + direction,
            1
        );
        setCurrentDate(newDate);
    };

    // Selecionar um dia
    const handleDayClick = (date) => {
        setSelectedDate(date.toISOString().split('T')[0]); // Formato YYYY-MM-DD
    };

    // Criar um agendamento
    const handleAgendar = async () => {
        if (!horario || !selectedDate) {
            alert('Selecione uma data e horário.');
            return;
        }

        try {
            await axios.post('http://localhost:3000/agendamentos', {
                data: selectedDate,
                horario,
                descricao,
                usuario_id: usuarioId,
            });

            alert('Agendamento realizado com sucesso!');
            setHorario('');
            setDescricao('');
            setSelectedDate(null);
            fetchAgendamentos(selectedDate); // Atualiza os agendamentos
        } catch (err) {
            console.error(err);
            alert('Erro ao criar agendamento.');
        }
    };

    // Buscar agendamentos para uma data específica
    const fetchAgendamentos = async (date) => {
        try {
            const response = await axios.get(`http://localhost:3000/agendamentos/${date}`);
            setAgendamentos(response.data);
        } catch (err) {
            console.error(err);
            alert('Erro ao buscar agendamentos.');
        }
    };

    useEffect(() => {
        if (selectedDate) {
            fetchAgendamentos(selectedDate);
        }
    }, [selectedDate]);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayIndex = new Date(year, month, 1).getDay();

    return (
        <div>
            <Navbar />
            <div className="calendar">
                <img src="folinhas.jpg" alt="" className="folinhas" />
                {/* Cabeçalho do calendário */}
                <div className="header">
                    <button onClick={() => changeMonth(-1)}>◀</button>
                    <h2>
                        {currentDate.toLocaleString('default', { month: 'long' })} {year}
                    </h2>
                    <button onClick={() => changeMonth(1)}>▶</button>
                </div>

                {/* Dias da semana */}
                <div className="days-of-week">
                    {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
                        <div key={day} className="day-name">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Dias do mês */}
                <div className="days">
                    {/* Espaço para os dias antes do início do mês */}
                    {Array.from({ length: firstDayIndex }).map((_, index) => (
                        <div key={index} className="day empty"></div>
                    ))}

                    {/* Dias do mês */}
                    {daysInMonth.map((date) => (
                        <div
                            key={date.toString()}
                            className="day"
                            onClick={() => handleDayClick(date)}
                        >
                            {date.getDate()}
                        </div>
                    ))}
                </div>
            </div>

            {selectedDate && (
                <div className="agendamento-form">
                    <h3>Agendamentos para {selectedDate}</h3>
                    <ul>
                        {agendamentos.map((agendamento) => (
                            <li key={agendamento.id}>
                                {agendamento.horario} - {agendamento.descricao || 'Sem descrição'}
                            </li>
                        ))}
                    </ul>
                    <input
                        type="time"
                        value={horario}
                        onChange={(e) => setHorario(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição (opcional)"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    ></textarea>
                    <button onClick={handleAgendar}>Agendar</button>
                </div>
            )}
        </div>
    );
}

export default Calendario;