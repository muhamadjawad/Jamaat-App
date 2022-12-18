import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import colors from '../../theme/colors';
import {GLOBAL_SCREEN_PADDING} from '../../utils/logicalConstants';
import MasjidListing from './MasjidListing';

const Masjids = () => {
  return (
    <View style={[styles.main]}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <MasjidListing />
      </ScrollView>
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
