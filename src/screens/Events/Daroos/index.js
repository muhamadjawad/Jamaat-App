import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import RenderDars from './RenderDars';

const Daroos = () => {
  return (
    <View style={[styles.main]}>
      <RenderDars />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
});
export default Daroos;
