import React, { useContext, useEffect, useState } from "react";
import { } from "./body.scss";
import SearchBar from "./SearchBar";
import Card from './Card';
import DataContext from "../context/ValueContext";
import axios from 'axios';

export default function Body() {

  const data = useContext(DataContext);
  const [country, setCountry] = useState([{}])

  async function callCountry() {
    let request = await axios.get(`https://restcountries.com/v3.1/name/${data.valueImput}`).then(response => {
      if (response.status == 200) {
        setCountry(response.data);
        console.log(country);
      }
    }).catch((error) => {
      console.error('Ocorreu um erro: ' + error)
    })
  }
  useEffect(() => {
    callCountry()
  }, [data.valueImput])

  return (
    <div className="body">
      <SearchBar />
      <div className="cardContainer">
        {
          country.map(count => {
            return (
              <Card
                name={count.altSpellings[2]}
                population={count.population}
              // region={ }
              // capital={ }
              // background={ }
              />
            )
          })
        }
      </div>
    </div>
  );
}


