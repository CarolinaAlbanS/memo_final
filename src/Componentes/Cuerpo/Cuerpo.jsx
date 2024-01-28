// import React, { useEffect, useState } from "react";
import Gallery from "../Gallery/Gallery";
import "../Cuerpo/Cuerpo.css";

const Cuerpo = ({ cards }) => {
  return (
    <div className="cuerpo">
      <h1>JUEGO DEL MEMO</h1>
      <Gallery imagen={cards}></Gallery>
    </div>
  );
};
export default Cuerpo;
