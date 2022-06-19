import React from 'react';
import {StyleSheet, View, TextInput, Image} from 'react-native';

const Searchbar = ({value, updateSearch, style}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.searchContainer}>
        <View style={styles.vwSearch}>
          <Image
            style={styles.icSearch}
            source={{
              uri: 'https://img.icons8.com/material-outlined/344/search--v1.png',
            }}
          />
        </View>

        <TextInput
          value={value}
          placeholder="Search"
          style={styles.textInput}
          onChangeText={text => updateSearch(text)}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
  },

  vwSearch: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icSearch: {
    height: 25,
    width: 25,
  },
  searchContainer: {
    width: '90%',
    height: 40,
    flexDirection: 'row',
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  container: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ededed',
    shadowColor: '#000',
  },
});
