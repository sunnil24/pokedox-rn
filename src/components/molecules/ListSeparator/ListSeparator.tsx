import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {};

const ListSeparator = ({}: Props) => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 16,
    flexDirection: 'row',
  },
});

export default ListSeparator;
