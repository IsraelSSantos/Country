import React, { useContext } from 'react'
import CountryDetailContext from '../../context/CountryDetail'
import { Link } from 'react-router-dom'
import { } from './detail.scss';
import NumberFormat from 'react-number-format';

export default function Detail() {

    const infoCountry = useContext(CountryDetailContext);

    console.log(infoCountry.detail);

    return (<>
        <div className='detailScreen'>
            <div className='backButton'>
                <Link to="../" refresh={true}>
                    <h3><span>&#8592;</span>Back</h3>
                </Link>
            </div>
            <div className='detailContainer'>
                <div className='countryFlag'>
                    <img className='flag' src={`${infoCountry.detail.flag}`} alt="" />
                </div>
                <div className='countryInfoContainer'>
                    <strong>
                        <h2>{infoCountry.detail.name}</h2>
                        <br />
                        <p>Native Name: <span>{infoCountry.detail.nativeName}</span></p>
                        <p>Population: <span><NumberFormat value={infoCountry.detail.population} displayType={'text'} thousandSeparator={true} /></span></p>
                        <p>Region: <span>{infoCountry.detail.region}</span></p>
                        <p>Sub Region: <span>{infoCountry.detail.subRegion}</span></p>
                        <p>Capital: <span>{infoCountry.detail.capital}</span></p>
                        <p>Top Level Domain: <span>{infoCountry.detail.topLevelD}</span></p>
                        <p>Size: <span> {infoCountry.detail.size} Km²</span></p>
                        {/* <p>Languages: <span>NAME COUNTRY</span></p> */}
                        <br />
                        <div className='borderCountry'>
                            <p>Border Countries: </p>
                        </div>
                    </strong>
                </div>
            </div>
        </div>
    </>)
}
