import React, { useEffect } from "react";
import { Characters } from "./characters";
import { useEpisode } from "../hook/useEpisode";

export function Character(props) {
  const { character } = props;
  const { image, name, status, species, origin, location, id, episode } =
    character;

  const { getAllEpisodes } = useEpisode();

  const episodes = () => {
    const episodes = episode;
    const casiDigitos = episodes.map((str) => str.slice(-2));
    const digitosEpisode = casiDigitos.map((str) => {
      const partes = str.split("/");
      return partes.length > 1 ? partes[1] : str;
    });
    console.log(digitosEpisode);
    return digitosEpisode;
  };
  const contenido =
    status === "Alive" ? (
      <span className="alive"></span>
    ) : status === "Dead" ? (
      <span className="dead"></span>
    ) : (
      <span className="van"></span>
    );

  return (
    <li className="acomodar" key={id}>
      <div className="imagen">
        <img src={image} />
      </div>
      <div className="data">
        <div className="arriba">
          <h3>{name}</h3>
          <div id="divpuntito">
            {contenido}

            <p className="paddingBot" id="status">
              {status} - {species}
            </p>
          </div>
        </div>
        <p className="chiquitito">Last known location:</p>
        <a href="{item.origin.url}">{origin.name}</a>
        <p id="separarP" className="chiquitito">
          Episodes:
        </p>
        <button onClick={() => getAllEpisodes(episodes())}>
          {location.name}
        </button>
      </div>
    </li>
  );
}
