import { } from './app.scss';
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HandleBar from "./components/HandleBar/HandleBar";
import Body from './components/Body/Body';
import Detail from './components/Detail/Detail';
import DataContext from './context/DataContext'
import CountryDetail from './context/CountryDetail';

function App() {

  const [mode, setMode] = useState('light');
  const [valueImput, setValueImput] = useState();
  const [detail, setDetail] = useState();

  return (
    <BrowserRouter>
      <DataContext.Provider value={{ valueImput, setValueImput }}>
        <CountryDetail.Provider value={{ detail, setDetail }}>
          <div className={`App ${mode}-mode`}>
            <Routes>
              <Route path="/" exact element={<><HandleBar setMode={setMode} /><Body /></>} />
              <Route path="/detail" exact element={<><HandleBar setMode={setMode} /> <Detail /> </>} />
            </Routes>
          </div >
        </CountryDetail.Provider>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;