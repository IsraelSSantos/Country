import React, { useContext, useState } from "react";
import { } from "./searchbar.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DataContext from "../context/ValueContext";
import $ from 'jquery';
const options = ["Africa", "América", "Asia", "Europe", "Oceania"];


export default function SearchBar() {

  const [value, setValue] = useState();
  const [inputValue, setInputValue] = useState("Africa");
  const dataContext = useContext(DataContext);

  const closeButton = $("MuiAutocomplete-clearIndicator");
  $(closeButton.on('click', (e) => {
    console.log('clicou')
    e.preventDefault();
  }))
  return (

    < div className="searchbar" >
      <div className="bar">
        <TextField
          id="outlined-basic"
          label="Busque por um País"
          className="text-field"
          onChange={(e) => {
            console.log(e.target.value)
            dataContext.setValueImput(e.target.value.trim())
          }}
        >
          Buscar
        </TextField>
      </div>
      <div>
        <br />
        <div>{`value: ${value !== null ? `'${value}'` : ""}`}</div> */
        <div>{`inputValue: '${inputValue}'`}</div>
        <br />
        <Autocomplete
          className="autoComplete"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            setInputValue(newValue)
            dataContext.setValueImput(newValue)
          }}
          inputValue={value}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Filtrar por Continente"
              className="text-field"
            />
          )}
        />
      </div>
    </div >
  );

}

