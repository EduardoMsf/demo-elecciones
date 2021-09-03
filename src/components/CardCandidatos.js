import React, { useState } from 'react';


export const CardCandidatos = ({ partido, lista, grupo, nombre, isSelected}) => {

    const [selected, setSelected] = useState({
        isSelected
    });

    
    const handleClick = (e) =>{
        e.preventDefault();
        setSelected({ isSelected: !selected.isSelected })
    };

    //console.log(selected);
    return (
        <div onClick={handleClick}>
            <h3>{partido}</h3>
            <div className='card-container'>
                <div>
                    <img className='card-container-img' src={`../assets/avatares/${lista}.jpg`} alt='candidato' />
                </div>
                <div className='card-container-info'>
                    <h6>LISTA</h6>
                    <h5>{lista}</h5>
                    <span>{grupo}</span>
                </div>
            </div>
            <p className='card-container-nombre'>{nombre}</p>

            <div>
                {/*<button className='btn'>Votar</button>]*/}
            </div>
        </div>
    )
}
