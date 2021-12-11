import React, { useContext } from 'react'
import { } from './card.scss';

export default function Card(props) {

    const { name,
        population,
        region,
        capital,
        background
    } = props;

    return (<div className='Card'>
        <div className='containerFlag'>
            <div className='flag' style={{ 'backgroundImage': `url("${background}")` }} />
        </div>
        <div className='content'>
            <h2>{name}</h2>
            <p><strong>Population:</strong> {population} </p>
            <p><strong>Region:</strong> {region} </p>
            <p><strong>Capital:</strong> {capital} </p>
        </div>
    </div>)

}
