import React from "react";
import { useState } from "react";

const Planeta = ({ planet, actualizar, jugada }) => {
  const id = planet.id;
  const [reverso, setReverso] = useState();
  const [resuelto, setResuelto] = useState(false);

  const cartaArriba = () => {
    jugada.push({ name: planet.name, id: planet.id });
    console.log(jugada);

    if (jugada.length === 2) {
      if (jugada[0].name === jugada[1].name && jugada[0].id != jugada[1].id) {
        setResuelto(!resuelto);
      }
      actualizar([]);
    }

    setReverso(!reverso);
  };

  if (resuelto) {
    return (
      <img
        className="planeta"
        src="http://localhost:3000/fotos/tick.svg"
        alt="imagenes"
      />
    );
  }
  if (reverso) {
    return (
      <img
        className="planeta"
        onClick={cartaArriba}
        src={planet.img}
        alt="imagenes"
      />
    );
  }

  return (
    <img
      onClick={cartaArriba}
      src="http://localhost:3000/fotos/universe.svg"
      alt="imagen"
    />
  );
};

export default Planeta;
