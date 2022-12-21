import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Daroos from './Daroos';
import {GLOBAL_SCREEN_PADDING} from '../../utils/logicalConstants';

const Events = () => {
  return (
    <View style={[styles.main]}>
      <Daroos />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: GLOBAL_SCREEN_PADDING,
  },
});
export default Events;
