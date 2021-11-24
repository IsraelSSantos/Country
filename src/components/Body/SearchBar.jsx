import React from "react";
import {} from "./searchbar.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBar() {
  let inputValue = "";
  return (
    <div className="searchbar">
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
        Procurar
      </Button>
    </div>
  );
}
