import React from "react";

const valorPorDefecto = {
  name: "No hay frase nueva",
  setName: () => {}
};
const contexto = React.createContext(valorPorDefecto);
export default contexto;