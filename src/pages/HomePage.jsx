import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//

export default function HomePage() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=25"
        );
        setPokemon(response.data.results);
        //console.log("response", response.data.results);
      } catch (e) {
        console.log(e.message);
      }
    };
    getPokemon();
  }, []);

  return (
    <div>
      <h2>W elcome to the Home page</h2>
      <Link to={"/about"}>Go to another page</Link>
      {pokemon.map((p) => (
        <Link to={`/details/${p.name}`}>
          <h2 key={p.name}>{p.name}</h2>
        </Link>
      ))}
    </div>
  );
}
