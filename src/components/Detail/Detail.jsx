import React, { useContext } from 'react'
import CountryDetailContext from '../../context/CountryDetail'
import { Link } from 'react-router-dom'
import { } from './detail.scss';
export default function Detail() {

    const infoCountry = useContext(CountryDetailContext);

    console.log(infoCountry.detail);

    return (<>
        <div className='detailScreen'>
            <div className='backButton'>
                <Link to="/">
                    <h3><span>&#8592;</span>Back</h3>
                </Link>
            </div>
            <div className='detailContainer'>
                <div className='countryFlag'>
                    <div className='flag' />
                </div>
                <div className='countryInfoContainer'>
                    <strong>
                        <h2>{infoCountry.detail.name}</h2>
                        <br />
                        <p>Native Name: <span>NAME COUNTRY</span></p>
                        <p>Population: <span>{infoCountry.detail.population}</span></p>
                        <p>Region: <span>NAME COUNTRY</span></p>
                        <p>Sub Region: <span>NAME COUNTRY</span></p>
                        <p>Capital: <span>NAME COUNTRY</span></p>
                        <p>Top Level Domain: <span>NAME COUNTRY</span></p>
                        <p>Currencies: <span>NAME COUNTRY</span></p>
                        <p>Languages: <span>NAME COUNTRY</span></p>
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
