import React, {Component, useState} from 'react';
import {ScrollView, View} from 'react-native';
import SearchBar from '../../../components/SearchBar';
import {height} from '../../../styles/dimensions';
import RenderMasjid from './RenderMasjid';

const MasjidListing = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, paddingBottom: height(1)}}>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <RenderMasjid key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MasjidListing;
