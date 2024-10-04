import {NavigationProp} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-remix-icon';
import {toCapitalize} from '../../utils/common';
import {getPokemonURL, getTypes} from '../../utils/pokemon';
import PokemonImage from '../../components/molecules/PokemonImage';
import {getPokemonDescription} from '../../services/pokemon';
import {fonts} from '../../utils/typography';

type Props = {
  navigation: NavigationProp<any>;
  route: Record<string, any>;
};

const description = `Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally. When expelling a blast of super hot fire, the red flame at the tip of its tail burns more intensely. If CHARIZARD be­comes furious, the flame at the tip of its tail flares up in a whitish-blue color. Breathing intense, hot flames, it can melt almost any­ thing. Its breath inflicts terrible pain on enemies. It uses its wings to fly high. The temperature of its fire increases as it gains exper­\nience in battle. CHARIZARD flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself. Its wings can carry this POKéMON close to an altitude of 4,600 feet. It blows out\nfire at very high temperatures. It is said that CHARIZARD’s fire burns hotter if it has\nexperienced harsh battles.`;

const Details: FC<Props> = ({navigation, route}) => {
  const {params} = route;
  const {data} = params;
  const {name, types, id} = data;
  const imageUrl = getPokemonURL(name);
  const _types = getTypes(types);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{toCapitalize(name)}</Text>
        <TouchableOpacity
          style={styles.close}
          onPress={() => navigation.goBack()}>
          <Icon name="close-line" size="24" color="#2E3156" />
        </TouchableOpacity>
      </View>
      <View style={styles.details}>
        <View style={styles.imageWrapper}>
          <PokemonImage imageUrl={imageUrl} types={_types} />
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            {`${description.substring(0, 300)}...`}
            <TouchableOpacity
              onPress={() => {
                Alert.alert(description);
              }}>
              <Text style={styles.readMore}>Read More</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 36,
    color: '#2E3156',
    fontFamily: fonts.robotoBold,
  },
  close: {
    borderWidth: 1,
    borderRadius: 50,
    height: 30,
    width: 30,
    borderColor: '#2E3156',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    flexDirection: 'row',
    flex: 2,
    flexWrap: 'wrap',
    gap: 16,
  },
  imageWrapper: {
    flex: 1,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black',
    width: '100%',
    alignItems: 'center',
    height: 300,
  },
  description: {
    flex: 1,
  },
  descriptionText: {
    color: 'black',
    fontSize: 16,
  },
  readMore: {
    fontSize: 16,
    color: '#2E3156',
    fontFamily: fonts.robotoBold,
  },
});

export default Details;
