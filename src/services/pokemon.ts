import {POKEMON_LIST} from '../constants/api';

interface DreamWorldSprites {
  front_default: string;
  front_female: string | null;
}

interface HomeSprites {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

interface OfficialArtworkSprites {
  front_default: string;
  front_shiny: string;
}

interface ShowdownSprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

// Define the structure for the "other" section
interface OtherSprites {
  dream_world: DreamWorldSprites;
  home: HomeSprites;
  'official-artwork': OfficialArtworkSprites;
  showdown: ShowdownSprites;
}

// Define the structure for the main sprites object
interface Sprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: OtherSprites;
}

interface Type {
  name: string;
  url: string;
}

// Define the structure for the slot-type mapping
interface SlotType {
  slot: number;
  type: Type;
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  sprites: Sprites;
  types: SlotType[];
}

export interface PokemonApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export const getPokemonList = async (): any => {
  const response = await fetch(POKEMON_LIST);
  const list: PokemonApiResponse = await response.json();
  const fullDetails = await Promise.all(
    list.results.map(async _list => {
      const res = await fetch(_list.url);
      return res.json();
    }),
  );

  return fullDetails;
};

export const getPokemonDescription = async (id: number): any => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`,
  );
  const details = await response.json();
  return details;
};

// https://pokeapi.co/api/v2/pokemon-species/6

// export const getFullPokemonDetails = async (list: Pokemon[]) => {
//   const response = await Promise.all(
//     list.map(async _list => {
//       const res = await fetch(_list.url);
//       return res.json();
//     }),
//   );

//   console.log(response[0]);

//   // const response = await fetch(POKEMON_LIST);
//   // const list = await response.json();
//   // return list;
// };
