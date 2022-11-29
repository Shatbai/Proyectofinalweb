import React, { useContext } from "react";
import Context from "../contexto/contexto";
import {Link} from "react-router-dom";

const Show = props => {
  const contexto = useContext(Context);
  return (
    <div>
      <p>La nueva frase es : {contexto.name}</p>
      <Link to="/">Regresar</Link>
    </div>
  );
};

export default Show;