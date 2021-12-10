import React, { useContext, useState } from "react";
import { } from "./searchbar.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import DataContext from "../context/ValueContext";

const options = ["Africa", "América", "Asia", "Europa", "Oceania"];


export default function SearchBar() {

  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");

  const dataContext = useContext(DataContext);

  return (
    <div className="searchbar">
      <div className="bar">
        <TextField
          id="outlined-basic"
          label="Busque por um País"
          className="text-field"
          onChange={(e) => {
            console.log(e.target.value)
            setInputValue(e.target.value.trim())
            dataContext.setValueImput(e.target.value.trim())
          }}
        ></TextField>
        <Button
          variant="contained"
          onClick={() => {

          }}
        >
          Buscar
        </Button>
      </div>
      <div>
        <br />
        <Autocomplete
          className="autoComplete"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          onInputChange={(newInputValue) => {

          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Filtrar por Região"
              className="text-field"
            />
          )}
        />
      </div>
    </div>
  );

}

