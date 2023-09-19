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
      <div className="conteiner">
        {personajes.map((item, index) => (
          <div className="acomodar">
            <li key={index}>
              <div className="imagen">
                <img src={item.image} />
              </div>
              <div className="data">
                <p>{item.name}</p>
                <p>{item.status}</p>
              </div>
            </li>
          </div>
        ))}
      </div>
    </>
  );
}
