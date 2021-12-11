import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { } from "./body.scss";
import SearchBar from "./SearchBar";
import Card from './Card';
import DataContext from "../context/ValueContext";
import CountryDetailContext from "../context/CountryDetail";
import axios from 'axios';

export default function Body() {

  const data = useContext(DataContext);
  const detail = useContext(CountryDetailContext);
  const [country, setCountry] = useState([{}])
  let url = "https://restcountries.com/v3.1/region/"

  async function callCountry() {
    let request = await axios.get(url + `${data.valueImput ? data.valueImput : 'a'}?fullText=true`).then(response => {
      if (response.status == 200) {
        setCountry(response.data);
      }
    }).catch((error) => {
      console.error('Ocorreu um erro: ' + error)
    })
  }
  useEffect(() => {
    if (data.valueImput == "Africa" || data.valueImput == "América" || data.valueImput == "Asia" || data.valueImput == "Europe" || data.valueImput == "Oceania") {
      if (data.valueImput == "América") {
        data.valueImput = "americas"
      }
      url = "https://restcountries.com/v3.1/region/"
    } else {
      url = "https://restcountries.com/v3.1/translation/"
    }
    callCountry()
  }, [data.valueImput])

  return (
    <div className="body">
      <SearchBar />
      <div className="cardContainer">

        {
          country.map(count => {
            detail.setDetail(count)
            return (
              <Link to="/detail">
                <Card
                  key={count.altSpellings}
                  name={count.altSpellings ? count.translations.por.common : 'Desconhecido'}
                  population={count.population ? count.population : ''}
                  region={count.region ? count.region : ''}
                  capital={count.capital ? count.capital : ''}
                  background={count.flags ? count.flags.png : ''}
                />
              </Link>
            )
          })
        }
      </div>
    </div>
  );
}