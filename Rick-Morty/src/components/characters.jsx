import { useEffect, useState } from "react";
import "../characters.css";
export function Characters() {
  const [personajes, setPersonajes] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));
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
              <h3>{item.name}</h3>
              <p className="paddingBot" id="status">
                {item.status}-{item.species}
              </p>
              <p>Last known location:</p>
              <a href="{item.origin.url}">{item.origin.name}</a>
              <p>First seen in:</p>
              <a href="{item.location.url}">{item.location.name}</a>
              
            </div>
          </li>
        ))}
      </div>
      </ul>                 
    </>
  );
}
