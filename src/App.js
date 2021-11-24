import React, { useState } from "react";
import { } from './app.scss';
import HandleBar from "./components/HandleBar/HandleBar";


function App() {

  const [mode, setMode] = useState('light');

  return (
    <div className={`App ${mode}-mode`}>
      <HandleBar setMode={setMode} />
      <h1>Body</h1>
    </div >
  );
}

export default App;
