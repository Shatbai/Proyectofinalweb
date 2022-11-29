import React from "react";
import Context from "./contexto"


const valorPorDefecto = {
  name: "",
  setName: name => (valorPorDefecto.name=name)
};

const Contenedor = props => (
  <Context.Provider value={valorPorDefecto}>
    {props.children}
  </Context.Provider>
);

export default Contenedor;