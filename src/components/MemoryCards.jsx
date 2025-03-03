import Card from "./Card";
import { useState, useEffect } from "react";

async function fetchPokemon() {
    try {
        const LIMIT = 16;
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`,
            {
                mode: "cors",
            },
        );
        const jsonResponse = await response.json();
        const pokemons = jsonResponse.results;
        const requiredData = [];
        pokemons.map((pokemon) => {
            fetch(pokemon.url)
                .then((pokemonInfo, error) => {
                    if (error) {
                        console.log(new Error(error));
                    }
                    return pokemonInfo.json();
                })
                .then((pokemonInfoJson, error) => {
                    if (error) {
                        console.log(new Error(error));
                    }
                    const image = pokemonInfoJson.sprites.front_default;

                    requiredData.push({
                        id: crypto.randomUUID(),
                        name: pokemon.name,
                        img: image,
                    });
                });
        });
        return requiredData;
    } catch (e) {
        console.log(new Error(e));
    }
}

fetchPokemon();

function MemoryCards() {
    const [pokemons, setPokemons] = useState(null);
    useEffect(() => {
        let ignore = false;
        fetchPokemon().then((pokes) => {
            if (!ignore) {
                setPokemons(pokes);
            }
        });
        return () => {
            ignore = true;
        };
    }, []);

    return (
        <main>
            <div className="memory-cards">
                {pokemons
                    ? pokemons.map((pokemon) => {
                          return (
                              <Card
                                  name={pokemon.name}
                                  img={pokemon.img}
                                  key={pokemon.id}
                              />
                          );
                      })
                    : "The pokemons are coming..."}
            </div>
        </main>
    );
}

export default MemoryCards;
