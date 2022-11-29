import React from "react";

const valorPorDefecto = {
  name: "",
  setName: () => {}
};
const contexto = React.createContext(valorPorDefecto);
export default contexto;