import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};

const Header = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> &copy; {new Date().getFullYear()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    fontWeight: 600,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  title: {
    fontSize: 10,
  },
});

export default Header;
