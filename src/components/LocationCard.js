import React from "react";
import '../../src/index.css'

export default function LocationCard(props) {
  return (
    <div className="div">
      <h1 id="loc">Location:{props.chars.name}</h1>
      <h2 id="type">Type:{props.chars.type}</h2>
      <h3 id="dim">Dimension:{props.chars.dimension}</h3>
    </div>
  );
}
