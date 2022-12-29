import React, {Component, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Daroos from './Daroos';
import {GLOBAL_SCREEN_PADDING} from '../../utils/logicalConstants';
import Khutbaat from './Khutbaat';
import colors from '../../theme/colors';
import EventTabBar from './EventTabBar';
import Conferences from './Conferences';

const Events = () => {
  const [activeEvent, setActiveEvent] = useState('khutbaat'); //'khutbaat'  or 'daroos' 'conference'
  return (
    <View style={[styles.main]}>
      <EventTabBar activeEvent={activeEvent} setActiveEvent={setActiveEvent} />
      {activeEvent === 'daroos' && <Daroos />}
      {activeEvent === 'khutbaat' && <Khutbaat />}
      {activeEvent === 'conferences' && <Conferences />}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: GLOBAL_SCREEN_PADDING,
    flex: 1,
  },
});
export default Events;
