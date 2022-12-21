import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EventIcon from '../../../../assets/svgs/Event';
import colors from '../../../../theme/colors';
import InfoSection from './InfoSection';
import Muqarir from './Muqarir';

const RenderDars = () => {
  return (
    <View>
      <InfoSection />
      {/* muqarir */}
      <Muqarir />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default RenderDars;
