import React from "react";
import { Characters } from "./characters";

export function Character(props) {
  const { character, key } = props;
  const {image, name, status, species, origin, location} = character;
  return (
    <li className="acomodar" key={key}>
      <div className="imagen">
        <img src={image} />
      </div>
      <div className="data">
        <div className="arriba">
          <h3>{name}</h3>
          <p className="paddingBot" id="status">
            {status} - {species}
          </p>
        </div>
        <p className="chiquitito">Last known location:</p>
        <a href="{item.origin.url}">{origin.name}</a>
        <p id="separarP" className="chiquitito">
          First seen in:
        </p>
        <a href="{item.location.url}">{location.name}</a>
      </div>
    </li>
  );
}
