import React, {Component, useState} from 'react';
import {View} from 'react-native';
import SearchBar from '../../../components/SearchBar';
import RenderMasjid from './RenderMasjid';

const MasjidListing = () => {
  const [searchResult, setSearchResult] = useState('');
  return (
    <View>
      <SearchBar
        placeholder="MAsjid Btaen"
        value={searchResult}
        onChangeText={val => setSearchResult(val)}
      />
      {[1, 2, 3, 4, 5].map((item, index) => (
        <RenderMasjid key={index} />
      ))}
    </View>
  );
};

export default MasjidListing;
