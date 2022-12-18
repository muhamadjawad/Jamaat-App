import React, {Component} from 'react';
import {View} from 'react-native';
import RenderMasjid from './RenderMasjid';

const MasjidListing = () => {
  return (
    <View>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <RenderMasjid key={index} />
      ))}
    </View>
  );
};

export default MasjidListing;
