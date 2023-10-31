import { useState } from "react";

export function useEpisode() {
  const [episodes, setEpisodes] = useState([]);

  const getAllEpisodes = (array) => {
    return fetch(`https://rickandmortyapi.com/api/episode/${array}`)
      .then((res) => res.json())
      .then((data) => setEpisodes(data));
  };
  return {
    episodes,
    getAllEpisodes,
  };
}
