import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Daroos from './Daroos';
import {GLOBAL_SCREEN_PADDING} from '../../utils/logicalConstants';
import Khutbaat from './Khutbaat';
import colors from '../../theme/colors';

const Events = () => {
  return (
    <View style={[styles.main]}>
      {/* <Daroos /> */}
      <Khutbaat />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: GLOBAL_SCREEN_PADDING,
  },
});
export default Events;
