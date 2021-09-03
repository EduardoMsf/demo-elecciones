import React, { useState } from 'react'
import { ListaCandidatos } from './components/ListaCandidatos'

export const DemoElecciones = () => {

    const date = new Date();
    const [ selected, setSelected ] = useState({
        isBool: false
    });

    const handleClick = e =>{
        e.preventDefault();
        setSelected({ isBool: !selected.isBool})
    }

    const handleClickCancel = e =>{
        e.preventDefault();
        alert('Has anulado tu voto');
    }

    const handleClickConfirm = e =>{
        e.preventDefault();
        alert('Gracias por votar');
    }

    return (
        <div >
            <div className='main-nav'>
                <img className= 'main-nav-logo' src={'./assets/avatares/logo.jpg'} alt='logo' />
                <img className='main-nav-logo-pais' src={'./assets/avatares/logo2.jpg'} alt='logo 2' />
            </div>
            <div>
                <h1 className='main-title-content'>Candidatos a presidente</h1>
                <div onClick={handleClick} className="main-list-content">
                    <ListaCandidatos className='main-list-item'/>    
                </div>
            </div>
            <div className='main-content-voto'>
                {
                    selected.isBool 
                    ? <button onClick={handleClickConfirm} className='btn-confirmar'>Votar</button>
                    : <button onClick={handleClickCancel} className='btn-anular'>Anular Voto</button>
                }   
            </div>
            <div className='main-footer'>
                <p className='main-footer-ciudadano'>Ciudadano válido 🪪</p>
                <p>{`📅 ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}  ${date.getHours()}:${date.getUTCMinutes()}:${date.getSeconds()}`}</p>
            </div>
        </div>
    )
}
