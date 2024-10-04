import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getColorsBaseonType} from '../../../utils/pokemon';

type Props = {
  imageUrl: string;
  types: string[];
};

const PokemonImage: FC<Props> = ({imageUrl, types}) => {
  const gradientColors = getColorsBaseonType(types);

  return (
    <LinearGradient colors={gradientColors} style={[styles.linearGradient]}>
      {imageUrl ? (
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
          width={150}
          height={150}
          resizeMode="contain"
          onError={err => {
            console.log(err.nativeEvent.error);
          }}
        />
      ) : null}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
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

export default PokemonImage;
