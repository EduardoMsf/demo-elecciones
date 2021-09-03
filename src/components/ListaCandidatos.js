import React from 'react';
import { candidatos } from '../data/candidatos';
import { CardCandidatos } from './CardCandidatos';

export const ListaCandidatos = () => {
    return (
        <div>
            {
                candidatos.map( candidato=>(
                    <ul>
                        <li>
                            <CardCandidatos key={parseInt(candidato.lista)} { ...candidato} />
                        </li>
                    </ul>
                ))
            }
        
        </div>
    )
}
//No se está usando este componente