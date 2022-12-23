import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import RenderKhutba from './RenderKhutba';

const Khutbaat = () => {
  return (
    <View>
      <ScrollView>
        {[1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <RenderKhutba key={index} />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {},
});
export default Khutbaat;
