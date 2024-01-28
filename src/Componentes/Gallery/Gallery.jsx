// import React, { useEffect, useState } from "react";
import "../Gallery/Gallery.css";
import Planeta from "../Planeta/Planeta";


const Gallery = ({ imagen }) => {
  
  return (
    <div className="car">
      {imagen.map((item, index)=> (
        <div className="planeta" key={index} >
          <Planeta planet={item}></Planeta>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
