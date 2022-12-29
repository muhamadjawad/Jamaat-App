import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {height} from '../../../styles/dimensions';
import RenderKhutba from './RenderKhutba';

const Khutbaat = () => {
  let data = [
    {
      name: 'Rashidi Masjid',
      khateeb: 'Sheikh Abdullah Nasir Rehmani',
      date: '11',
    },
    {name: 'Abu Hurairah Masjid', khateeb: 'Sheikh Ibrahim Bhatti', date: '11'},
    {name: 'Umme Kulsum Masjid', khateeb: 'Sheikh Hafiz Saleem', date: '11'},
    {name: 'Chhoti Masjid', khateeb: 'Sheikh Dawd Shakir', date: '11'},
    {name: 'Subhani Masjid', khateeb: 'Sheikh Usamn Safdar', date: '11'},
    {
      name: 'Rashidi Masjid',
      khateeb: 'Sheikh Abdullah Nasir Rehmani',
      date: '27',
    },
    {name: 'Abu Hurairah Masjid', khateeb: 'Sheikh Ibrahim Bhatti', date: '27'},
  ];

  return (
    <View style={[styles.main]}>
      <ScrollView>
        {data.map((item, index) => (
          <RenderKhutba key={index} item={item} />
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
export default Khutbaat;
