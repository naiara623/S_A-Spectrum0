import React from 'react'
import './Modal.css'
import { Link } from 'react-router-dom'
function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={onClose}>X</button>

     <img className='foto' src="user.png" alt="Ver Perfil" />
     &nbsp;&nbsp;&nbsp;
    <Link className='Link1' to={"/perfildeusuario"}> Ver Perfil</Link>
    <br /><br /><br />
    <img className='foto' src="apple-notes.png" alt="Estrategias" />
    &nbsp;&nbsp;&nbsp;
    <Link className='Link1' to={"/estrategia1"}>Estrategias</Link>
    <br /><br /><br />
    <img className='foto2' src="task-planning.png" alt="Agendamento" />
    &nbsp;&nbsp;&nbsp;
    <Link className='Link' to={"/calendario"}>Agendamentos</Link>
    <br /><br /><br />
    <img className='foto2' src="settings.png" alt="Configuração" />
    &nbsp;&nbsp;&nbsp;
    <Link className='Link' to={"#"}>Configurações</Link>

     

    </div>
  </div>
  )
}

export default Modal
