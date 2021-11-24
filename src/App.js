import { } from './app.scss';
import React, { useState } from "react";
import HandleBar from "./components/HandleBar/HandleBar";
import Body from './components/Body/Body';

function App() {

  const [mode, setMode] = useState('light');

  return (
    <div className={`App ${mode}-mode`}>
      <HandleBar setMode={setMode} />
      <Body />
    </div >
  );
}

export default App;
