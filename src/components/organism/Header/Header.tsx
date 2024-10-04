import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils/typography';

type Props = {};

const Header = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    fontWeight: 600,
  },
  title: {
    fontSize: 36,
    color: '#2E3156',
    fontFamily: fonts.robotoBold,
  },
});

export default Header;
