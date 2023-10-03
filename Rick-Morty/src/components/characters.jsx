import { useEffect, useState } from "react";
import "../characters.css";
import { useCharacter } from "../hook/useCharacter";

export function Characters() {
  const { getAllCharacter, personajes } = useCharacter();
  useEffect(() => {
    getAllCharacter();
  }, []);
  return (
    <>
      <header>
        <h1>Rick and Morty API</h1>
      </header>
      <ul>
        <div className="conteiner">
          {personajes.map((item, index) => (
            <li className="acomodar" key={index}>
              <div className="imagen">
                <img src={item.image} />
              </div>
              <div className="data">
                <div className="arriba">
                <h3>{item.name}</h3>
                <p className="paddingBot" id="status">
                  {item.status} - {item.species}
                </p>
                </div>
                <p className="chiquitito">Last known location:</p>
                <a href="{item.origin.url}">{item.origin.name}</a>
                <p className="chiquitito">First seen in:</p>
                <a href="{item.location.url}">{item.location.name}</a>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </>
  );
}
