import React, { useContext, useEffect } from "react";
import { } from "./body.scss";
import SearchBar from "./SearchBar";
import Card from './Card';
import DataContext from "../context/ValueContext";
import axios from 'axios';

export default function Body() {

  const data = useContext(DataContext);
  async function callCountry() {
    let request = await axios.get(`https://restcountries.com/v3.1/name/${data.valueImput}`).then(response => {
      if (response.status == 200) {
        console.log(response.data);
      }
    })
  }
  useEffect(() => {
    callCountry()
  }, [data.valueImput])

  return (
    <div className="body">
      <SearchBar />
      <div className="cardContainer">
        <Card />
        <h1> Contexto: {data.valueImput}</h1>
      </div>
    </div>
  );
}


