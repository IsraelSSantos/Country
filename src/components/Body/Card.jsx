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

        <h1>{name}</h1>
        <p> Population: {population} </p>
        <p> Region: {region} </p>
        <p> Capital: {capital} </p>

    </div>)
}