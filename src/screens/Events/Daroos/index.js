import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import RenderDars from './RenderDars';

const Daroos = () => {
  return (
    <View style={[styles.main]}>
      <ScrollView>
        {[1, 2, 3, 4, 4, 5, 6].map((item, index) => (
          <RenderDars key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
});
export default Daroos;
