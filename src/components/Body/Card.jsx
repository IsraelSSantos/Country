import React, { useContext, useEffect, useState } from 'react'
import { } from './card.scss';
import CountryDetailContext from '../../context/CountryDetail';
import NumberFormat from 'react-number-format';

export default function Card(props) {

    const detailInfo = useContext(CountryDetailContext);
    const { name,
        population,
        region,
        capital,
        background,
        nativeName,
        subRegion,
        topLevelD,
        languages,
        size,
        flag
        // currencies
    } = props;

    function setToDetail() {
        detailInfo.setDetail({
            name: `${name}`,
            population: `${population}`,
            region: `${region}`,
            capital: `${capital}`,
            flag: `${flag}`,
            // currencies: `${currencies}`,
            languages: `${languages}`,
            borderCountries: ``,
            background: `${background}`,
            nativeName: `${nativeName}`,
            subRegion: `${subRegion}`,
            topLevelD: `${topLevelD}`,
            size: `${size}`
        })

        console.log(detailInfo.detail);
    }

    // useEffect(() => {
    //     console.log(detailInfo.detail);
    // }, [detailInfo.detail])

    return (
        <div className='Card' onClick={setToDetail} >
            <div className='containerFlag'>
                <img src={`${background}`} className='flag' />
            </div>
            <div className='content'>
                <br />
                <h2>{name}</h2>
                <br />
                <p><strong>Population: </strong><NumberFormat value={population} displayType={'text'} thousandSeparator={true} /> </p>
                <p><strong>Region:</strong> {region} </p>
                <p><strong>Capital:</strong> {capital} </p>
            </div>
        </div>
    )

}
