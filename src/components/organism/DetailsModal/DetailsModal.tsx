import React, {ReactNode, useState} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {fonts} from '../../../utils/typography';
import Icon from 'react-native-remix-icon';

type Props = {
  children: ReactNode;
  visible: boolean;
  toggleVisible: () => void;
};

const Header = ({children, visible, toggleVisible}: Props) => {
  const handleClose = () => {
    toggleVisible();
  };

  return (
    <Modal visible={visible} style={styles.modal}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.close} onPress={handleClose}>
            <Icon name="close-line" size="24" color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>{children}</View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {},
  container: {
    padding: 16,
    fontWeight: 600,
    flexWrap: 'wrap',
    backgroundColor: '#2E3156',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
  },
  body: {
    flex: 1,
  },
  close: {
    borderWidth: 1,
    borderRadius: 50,
    height: 30,
    width: 30,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
