import React from "react";
import {} from "./searchbar.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["Africa", "América", "Asia", "Europa", "Oceania"];

export default function SearchBar() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className="searchbar">
      <div className="bar">
        <TextField
          id="outlined-basic"
          label="Busque por um País"
          className="text-field"
          onChange={(e) => {
            inputValue = e.target.value.trim();
          }}
        ></TextField>
        <Button
          variant="contained"
          onClick={() => {
            console.log(inputValue);
          }}
        >
          Buscar
        </Button>
      </div>
      <div>
        {/* <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div> */}
        {/* <div>{`inputValue: '${inputValue}'`}</div> */}
        <br />
        <Autocomplete
          className="autoComplete"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
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
