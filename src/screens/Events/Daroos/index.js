import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {height} from '../../../styles/dimensions';
import RenderDars from './RenderDars';

const Daroos = () => {
  let data = [
    {masjidName: 'Abu-Hurairah Masjid', time: 'fajar'},
    {masjidName: 'Umme Kulsim', time: 'isha'},
    {masjidName: 'Chhoti Masjid', time: 'maghrib'},
    {masjidName: 'Subhani Masjid', time: 'isha'},
    {masjidName: 'Quba Masjid', time: 'zuhur'},
  ];
  return (
    <View style={[styles.main]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item, index) => (
          <RenderDars key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: height(2),
  },
});
export default Daroos;
