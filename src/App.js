import { } from './app.scss';
import React, { useState } from "react";
import HandleBar from "./components/HandleBar/HandleBar";
import Body from './components/Body/Body';
import DataContext from './components/context/ValueContext';
function App() {

  const [mode, setMode] = useState('light');
  const [valueImput, setValueImput] = useState();

  return (
    <DataContext.Provider value={{ valueImput, setValueImput }}>
      <div className={`App ${mode}-mode`}>
        <HandleBar setMode={setMode} />
        <Body />
      </div >
    </DataContext.Provider>
  );
}

export default App;