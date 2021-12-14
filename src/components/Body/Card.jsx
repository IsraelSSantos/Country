import React, { useContext, useEffect } from 'react'
import { } from './card.scss';
import CountryDetailContext from '../../context/CountryDetail';

export default function Card(props) {

    const detailInfo = useContext(CountryDetailContext);

    const { name,
        population,
        region,
        capital,
        background
    } = props;

    function setToDetail() {
        detailInfo.setDetail({
            name: `${name}`,
            nativeName: ``,
            population: `${population}`,
            region: `${region}`,
            subRegion: ``,
            capital: `${capital}`,
            topLevelDomain: ``,
            currencies: ``,
            languages: ``,
            borderCountries: ``
        })

        console.log(detailInfo.detail);
    }

    // useEffect(() => {
    //     console.log(detailInfo.detail);
    // }, [detailInfo.detail])

    return (
        <div className='Card' onClick={setToDetail} >
            <div className='containerFlag'>
                <div className='flag' style={{ 'backgroundImage': `url("${background}")` }} />
            </div>
            <div className='content'>
                <h2>{name}</h2>
                <p><strong>Population:</strong> {population} </p>
                <p><strong>Region:</strong> {region} </p>
                <p><strong>Capital:</strong> {capital} </p>
            </div>
        </div>
    )

}
