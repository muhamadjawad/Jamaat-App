import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MasjidListing from './MasjidListing';

const Masjids = () => {
  return (
    <View style={[styles.main]}>
      <MasjidListing />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
});

export default Masjids;
