import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EventIcon from '../../../../assets/svgs/Event';
import {height} from '../../../../styles/dimensions';
import colors from '../../../../theme/colors';
import InfoSection from './InfoSection';
import Muqarir from './Muqarir';

const RenderDars = ({item}) => {
  return (
    <View style={[styles.main]}>
      <InfoSection item={item} />
      {/* muqarir */}
      <Muqarir />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.GRAY,
    paddingBottom: height(1),
  },
});

export default RenderDars;
