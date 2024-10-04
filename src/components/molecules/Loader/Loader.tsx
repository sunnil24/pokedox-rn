import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

type Props = {};

const Loader = ({}: Props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CADCDF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
