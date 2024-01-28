import React from "react";
import { useState } from "react";

const Planeta = ({ planet }) => {
  const id = planet.id;
  const [reverso, setReverso] = useState();
  const [jugadas, setJugadas] = useState([]);
  const cartaArriba = () => {
  

   setReverso(!reverso)
   
    
    // if (id === id) {
    //   jugada.push(event);
    //   console.log(event);
    // } else {
    //   console.log("un pasito");
    // }

    setReverso(!reverso);
  };

  const clickCard = () => {
    jugadas.push(planet.name)
    const nuevasJugadas = [...jugadas, planet.name];
    // let x = ([...jugadas,id])
    setJugadas(nuevasJugadas);
    console.log(nuevasJugadas)
    // if (planet.name && planet.img === planet.name && planet.img){
    //   console.log("hi")}
    //  else{
    //   console.log("no funciona")
    //  } 
     
     
     console.log(jugadas)
  }

  return (
    <>
      {reverso ? (
        <img
          onClick={() => {cartaArriba(); clickCard();}}
          className="planeta"
          src={planet.img}
          alt="imagenes"
        />
      ) : (
        <img
          onClick={cartaArriba}
          src="http://localhost:3000/fotos/universe.svg"
          alt="imagen"
        />
      )}
    </>
  );
};

export default Planeta;