import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {height, width} from '../../../../../styles/dimensions';
import colors from '../../../../../theme/colors';
import fontFamily from '../../../../../theme/fontFamily';
import fontSize from '../../../../../theme/fontSize';
import {GLOBAL_BORDER_RADIUS} from '../../../../../utils/logicalConstants';

const Muqarir = () => {
  const RenderMuqarir = ({name}) => {
    return (
      <View style={[styles.tag]}>
        <Text style={[styles.name]}>{name}</Text>
      </View>
    );
  };

  return (
    <View style={[styles.main]}>
      <ScrollView horizontal={true}>
        {[
          'Sheikh Abdullah Nasir Rehmani',
          'Sheikh Daud Shakir',
          'Sheikh Ibrahim Bhatti',
          'Adbul Haq Nadeem',
        ].map((item, index) => (
          <RenderMuqarir name={item} />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginTop: height(1.5),
  },

  tag: {
    backgroundColor: colors.PRIMARY,
    paddingHorizontal: width(1.5),
    paddingVertical: height(0.5),
    marginHorizontal: width(0.5),
    borderRadius: 3,
  },
  name: {
    fontFamily: fontFamily.ITALIC,
    fontSize: fontSize.MINI,
    color: colors.WHITE,
  },
});

export default Muqarir;
