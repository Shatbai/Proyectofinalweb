import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from "./components/Home";
import Show from "./components/Show";
import Contenedor from "./contexto/Contenedor";


function App() {
  return (
    <Contenedor>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/show' element={<Show/>} />
        </Routes>
      </BrowserRouter>
    </Contenedor>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;