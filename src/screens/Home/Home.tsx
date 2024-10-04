import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Layout from '../../components/templates/Layout';
import {getPokemonList, PokemonDetails} from '../../services/pokemon';
import PokemonList from '../../components/organism/PokemonList';
import PokemonSearch from '../../components/organism/PokemonSearch';
import Loader from '../../components/molecules/Loader';

const Home = () => {
  const [list, updateList] = useState<PokemonDetails[]>([]);
  const [originalList, updateOriginalList] = useState<PokemonDetails[]>([]);
  const [isFetching, updateFetching] = useState(true);

  const handleSearch = (name: string) => {
    const regex = new RegExp(name, 'i');
    const _list = originalList.filter(item => {
      return regex.test(item.name);
    });

    updateList(_list);
  };

  useEffect(() => {
    getPokemonList().then((res: any) => {
      updateList(res);
      updateOriginalList(res);
      updateFetching(false);
    });
  }, []);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <Layout>
      <View style={styles.container}>
        <PokemonSearch handleSearch={handleSearch} />
        <PokemonList list={list} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default Home;
