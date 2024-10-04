/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {toCapitalize} from '../../../utils/common';
import LinearGradient from 'react-native-linear-gradient';
import {
  getColorsBaseonType,
  getPokemonURL,
  getTypes,
} from '../../../utils/pokemon';
import {fonts} from '../../../utils/typography';
import {useNavigation} from '@react-navigation/native';
import PokemonImage from '../../molecules/PokemonImage';
import {PokemonDetails} from '../../../services/pokemon';

type Props = {
  positionedAtIndex: number;
  data: PokemonDetails;
};

const PokemonCard = ({positionedAtIndex = 0, data}: Props) => {
  const {types, name, id} = data;
  const navigation = useNavigation<any>();
  const _types = getTypes(types);
  const gradientColors = getColorsBaseonType(_types);
  const imageUrl = getPokemonURL(name);

  return (
    <View
      style={{
        ...styles.container,
        paddingLeft: positionedAtIndex % 2 === 0 ? 16 : 0,
      }}>
      <TouchableOpacity
        style={styles.cover}
        onPress={() => {
          navigation.navigate('Details', {
            data,
          });
        }}>
        <LinearGradient colors={gradientColors} style={[styles.linearGradient]}>
          {imageUrl ? (
            <PokemonImage imageUrl={imageUrl} types={_types} />
          ) : null}
          {name ? <Text style={styles.title}>{toCapitalize(name)}</Text> : null}
          {id ? (
            <Text style={styles.id}>{id.toString().padStart(3, '0')}</Text>
          ) : null}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    alignItems: 'center',
    width: '50%',
  },
  cover: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black',
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#2E3156',
    fontFamily: fonts.robotoMedium,
  },
  id: {
    fontSize: 20,
    color: '#2E3156',
    fontFamily: fonts.robotoRegular,
  },
  image: {
    marginVertical: 16,
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    gap: 8,
  },
});

export default PokemonCard;
