import React, { useEffect, useState } from "react";
import axios from "axios";
import CharCard from "./CharCard";

function CharGrid() {
  const [charAPI, setCharAPI] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(data => {
        console.log("original data: ", data);
        const char = data.data.results;
        console.log("char: ", char);
        setCharAPI(char);
      })
      .catch(error => console.log("StarWars API is currently down: ", error));
  }, []);

  return (
    <div className="char-grid">
      {charAPI.map(each => (
        <CharCard key={each} char={each} />
      ))}
    </div>
  );
}

export default CharGrid;
