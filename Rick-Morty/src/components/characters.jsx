import { useEffect, useState } from "react";
import "../characters.css";
import { useCharacter } from "../hook/useCharacter";
import { Character } from "./character";

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
            <div key={index}>
              <Character character={item} />
            </div>
          ))}
        </div>
      </ul>
    </>
  );
}
