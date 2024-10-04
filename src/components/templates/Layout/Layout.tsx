import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from '../../organism/Header';
import Footer from '../../organism/Footer';

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {children}
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#DEEDED'},
});

export default Layout;
