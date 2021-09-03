import React from 'react';
import { candidatos } from '../data/candidatos';
import { CardCandidatos } from './CardCandidatos';

export const ListaCandidatos = (props) => {
    return (
        <div>
            {
                candidatos.map( candidato=>(
                    <ul>
                        <li>
                            <CardCandidatos key={parseInt(candidato.lista)} { ...candidato}>
                            </CardCandidatos>
                        </li>
                    </ul>
                ))
            }
        
        </div>
    )
}
