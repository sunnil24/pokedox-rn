import {TYPE_COLORS} from '../constants/pokemon';

export const getColorsBaseonType = (types: string[]) => {
  const _types = types.map(type => TYPE_COLORS[type.toUpperCase()]);

  if (_types.length < 2) {
    _types.push('#DEEDED');
  }

  return _types;
};

export const getPokemonURL = (name: string) => {
  return `https://img.pokemondb.net/artwork/vector/large/${name}.png`;
};

export const getTypes = (types: {type: {name: string}}[]) => {
  return types.map(({type}) => type.name);
};
