import React, { useState } from 'react';
import { CardCandidatos } from './components/CardCandidatos';
import { ListaCandidatos } from './components/ListaCandidatos';
import { candidatos  } from './data/candidatos';

export const DemoElecciones = () => {

    const date = new Date();

    const [ selected, setSelected ] = useState({
        isBool: false,
        candidato1: false,
        candidato2: false,
        candidato3: false
    });

    const handleClickCandidato1 = e =>{
        e.preventDefault();
        setSelected({
             isBool: !selected.isBool,
             candidato1: !selected.candidato1,

        })
    }
    const handleClickCandidato2 = e =>{
        e.preventDefault();
        setSelected({
             isBool: !selected.isBool,
             candidato2: !selected.candidato2,

        })
    }
    const handleClickCandidato3 = e =>{
        e.preventDefault();
        setSelected({
             isBool: !selected.isBool,
             candidato3: !selected.candidato3,

        })
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
                <img className= 'main-nav-logo' src={'./assets/avatares/logo2.png'} alt='logo' />
            </div>
            <div className='main-section'>
                <div><img className='tepy' src={'./assets/avatares/TEPY.png'} /></div>
                <div className='main-title-content'>
                    <h1>Candidatos a presidente</h1>
                </div>
            </div>
                <div className='main-explore'>
                    
                    <div onClick={handleClickCandidato1} className={selected.isBool && selected.candidato1 ?'main-explore-section-candidato1' :'main-explore-section'}><CardCandidatos {...candidatos[0]} /></div>
                    <div onClick={handleClickCandidato2} className={selected.isBool && selected.candidato2 ?'main-explore-section-candidato2' :'main-explore-section'}><CardCandidatos { ...candidatos[1]} /></div>
                    <div onClick={handleClickCandidato3} className={selected.isBool && selected.candidato3 ?'main-explore-section-candidato3' :'main-explore-section'}><CardCandidatos {...candidatos[2]} /></div>
                    <div><img className='paraguay' src={'./assets/avatares/logo3.png'} /></div>
                </div>
            <div className='main-content-voto'>
                {
                    selected.isBool 
                    ? <button onClick={handleClickConfirm} className='btn-confirmar'>Votar</button>
                    : <button onClick={handleClickCancel} className='btn-anular'>Anular Voto</button>
                }   
            </div>
            <div className='main-footer' >
                {/*<div className='main-footer-text'>
                    <p className='main-footer-ciudadano'>Ciudadano válido 🙍</p>
                    <p>{`📅 ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}  ${date.getHours()}:${date.  getUTCMinutes()}:${date.getSeconds()}`}</p>  
                    <div className='main-footer-img'>
                        <img src={'./assets/avatares/logo_global.png'} />
                        <img src={'./assets/avatares/logo_dot.png'} />
                    </div> 
                </div>*/}
                <div className='main-footer-img-left'><img src={'./assets/avatares/logo_global.png'} /></div>
                <div className='main-footer-text'>
                    <p className='main-footer-text-left'>Ciudadano válido 🙍</p>
                    <p className='main-footer-text-right'>{`📅 ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}  ${date.getHours()}:${date.  getUTCMinutes()}:${date.getSeconds()}`}
                    </p>  
                </div>
                <div className='main-footer-img-right'><img src={'./assets/avatares/logo_dot.png'} /></div>
            </div>
        </div>
    )
}
