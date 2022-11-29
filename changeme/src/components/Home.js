import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import Context from "../contexto/contexto";

const Home = props => {
  const contexto = useContext(Context);
  const [redireccion, setRedireccion] = useState(false);
  const [name, setName] = useState("");

  const handleNameChange = e => setName(e.target.value);
  const handleNameSubmit = e => {
    e.preventDefault();
    contexto.setName(name);
    setRedireccion(true);
  };

  return redireccion ? (
    <Navigate to="/Show" />
  ) : (
    <div>
      <form onSubmit={handleNameSubmit}>
      <p>La nueva frase es : {contexto.name}</p>
        <label>Frase nueva:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
export default Home;