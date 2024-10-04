import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-remix-icon';
import {fonts} from '../../../utils/typography';
type Props = {
  handleSearch?: (key: string) => void;
};

const PokemonSearch = ({handleSearch}: Props) => {
  const [typedText, upateTypedText] = useState('');

  const handleText = (text: string) => {
    upateTypedText(text);
  };

  const onSearch = () => {
    handleSearch?.(typedText);
  };

  const onClearText = () => {
    upateTypedText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Search for any Pokémon that exists on the planet
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={typedText}
            onChangeText={handleText}
            placeholder="Enter keyword"
          />
          {typedText.length ? (
            <TouchableOpacity style={styles.clearIcon} onPress={onClearText}>
              <Icon name="close-line" size="24" color="#5D5F7E" />
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity style={styles.searchIcon} onPress={onSearch}>
            <Icon name="search-line" size="24" color="#5D5F7E" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.filter}>
          <Icon name="equalizer-fill" size="24" color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 8,
    paddingVertical: 16,
  },
  descriptionContainer: {
    borderTopColor: '#5D5F7E',
    borderTopWidth: 1,
    borderStyle: 'solid',
    paddingTop: 8,
    marginBottom: 16,
  },
  description: {
    color: '#5D5F7E',
    fontSize: 16,
    fontFamily: fonts.robotoMedium,
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    position: 'relative',
  },
  input: {
    height: 42,
    flex: 1,
    paddingLeft: 16,
    backgroundColor: '#C9DDE2',
    elevation: 1,
    borderRadius: 4,
    fontSize: 16,
    fontFamily: fonts.robotoMedium,
    paddingRight: 76,
  },
  searchIcon: {
    position: 'absolute',
    right: 16,
    top: 9,
  },
  clearIcon: {
    position: 'absolute',
    right: 44,
    top: 9,
  },
  filter: {
    backgroundColor: '#2E3156',
    padding: 8,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    columnGap: 16,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export default PokemonSearch;
