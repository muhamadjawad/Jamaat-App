import React, {Component, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import SearchBar from '../../components/SearchBar';
import colors from '../../theme/colors';
import {GLOBAL_SCREEN_PADDING} from '../../utils/logicalConstants';
import MasjidListing from './MasjidListing';

const Masjids = () => {
  const [searchResult, setSearchResult] = useState('');
  return (
    <View style={[styles.main]}>
      <SearchBar
        placeholder="Masjid Btaen"
        value={searchResult}
        onChangeText={val => setSearchResult(val)}
      />
      <MasjidListing />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: GLOBAL_SCREEN_PADDING,
  },
});

export default Masjids;
