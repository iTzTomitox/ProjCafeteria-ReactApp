import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{padding:24}}>
      <h2>404 - Página no encontrada</h2>
      <p>La ruta solicitada no existe.</p>
      <Link to='/'>Volver a Home</Link>
    </div>
  );
};

export default NotFound;
