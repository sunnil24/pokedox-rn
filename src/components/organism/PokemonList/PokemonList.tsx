import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PokemonDetails} from '../../../services/pokemon';

import PokemonCard from '../PokemonCard';

type Props = {
  list: PokemonDetails[];
};

const PokemonList: FC<Props> = ({list}) => {
  if (list.length) {
    return (
      <ScrollView>
        <View style={styles.container}>
          {list.map((item, index) => {
            const {id} = item;
            return (
              <PokemonCard
                key={`list-${id}`}
                positionedAtIndex={index + 1}
                data={item}
              />
            );
          })}
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.notFoundCintainer}>
      <Text style={styles.notFoundText}>No data available</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  notFoundCintainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  notFoundText: {
    fontSize: 20,
  },
});

export default PokemonList;
