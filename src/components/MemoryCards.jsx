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
        const requiredDataPromises = pokemons.map(async (pokemon) => {
            const pokemonInfo = await fetch(pokemon.url);
            const pokemonInfoJSON = await pokemonInfo.json();
            const image = pokemonInfoJSON.sprites.front_default;
            const pokemonName =
                pokemon.name.at(0).toUpperCase() + pokemon.name.slice(1);

            return {
                id: crypto.randomUUID(),
                name: pokemonName,
                img: image,
            };
        });
        const requiredData = Promise.all(requiredDataPromises);
        return requiredData;
    } catch (e) {
        console.log(new Error(e));
    }
}

fetchPokemon();

function MemoryCards({ score, updateScore }) {
    const [pokemons, setPokemons] = useState(null);
    const [choosenPokemons, setChoosenPokemons] = useState(new Set());

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

    function clickHandler(e) {
        // handing scores
        const cardId = e.target.closest(".card").id;
        if (choosenPokemons.has(cardId)) {
            updateScore(0);
            setChoosenPokemons(new Set());
        } else {
            updateScore(score + 1);
            const newChoosenPokemons = new Set(choosenPokemons.add(cardId));

            setChoosenPokemons(newChoosenPokemons);
        }

        // handling shuffling
        const usedIndexes = new Set();
        const newPokemons = [];
        pokemons.forEach((pokemon) => {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * pokemons.length);
            } while (usedIndexes.has(newIndex));
            usedIndexes.add(newIndex);
            newPokemons[newIndex] = pokemon;
        });

        setPokemons(newPokemons);
    }

    return (
        <main>
            <div className="memory-cards">
                {pokemons
                    ? pokemons.map((pokemon) => {
                          return (
                              <Card
                                  onClick={clickHandler}
                                  name={pokemon.name}
                                  img={pokemon.img}
                                  key={pokemon.id}
                                  id={pokemon.id}
                              />
                          );
                      })
                    : "The pokemons are coming..."}
            </div>
        </main>
    );
}

export default MemoryCards;
