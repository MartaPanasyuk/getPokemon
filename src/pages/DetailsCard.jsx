import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function DetailsCard() {
  const params = useParams();

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchByName = async () => {
      const pokeName = params.pokeName;
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokeName}`
        );
        console.log(response);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchByName();
  }, []);

  console.log("what is a params", params);
  return (
    <div>
      <Link to={"/"}>
        <button>Go Home</button>
      </Link>
      <div>Pokemon Details:</div>
      <h3></h3>
    </div>
  );
}
