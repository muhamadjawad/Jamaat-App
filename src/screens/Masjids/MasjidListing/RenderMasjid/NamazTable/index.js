import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {height, width} from '../../../../../styles/dimensions';
import colors from '../../../../../theme/colors';
import fontFamily from '../../../../../theme/fontFamily';
import fontSize from '../../../../../theme/fontSize';

const NamazTable = () => {
  const RenderNamazCell = ({title, value, active = false}) => {
    return (
      <View style={{flex: 1 / 3}}>
        <View
          style={[
            styles.cell,
            active ? {backgroundColor: colors.PRIMARY} : '',
          ]}>
          <Text
            style={[
              styles.namazTitle,
              active
                ? {color: colors.WHITE, fontFamily: fontFamily.SEMI_BOLD}
                : '',
            ]}>
            {title}
          </Text>
          <View style={{marginTop: height(0.2)}}>
            <Text
              style={[
                styles.namazTime,
                active
                  ? {
                      color: colors.WHITE,
                      fontFamily: fontFamily.SEMI_BOLD,
                      fontSize: fontSize.MINI,
                    }
                  : '',
              ]}>
              {value}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={[styles.main]}>
      <View style={{flexDirection: 'row'}}>
        <RenderNamazCell title={'Fajar'} value={'04:30 am'} />
        <RenderNamazCell title={'Zuhur'} value={'04:30 am'} active={true} />
        <RenderNamazCell title={'Asar'} value={'04:30 am'} />
      </View>
      <View style={{flexDirection: 'row', marginTop: height(0.3)}}>
        <RenderNamazCell title={'Maghrib'} value={'04:30 am'} />
        <RenderNamazCell title={'Isha'} value={'04:30 am'} />
        <RenderNamazCell title={'Jumma'} value={'04:30 am'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // elevation: 3,
    marginTop: height(1),
  },
  cell: {
    // flex: 1 / 3,
    flexDirection: 'row',
    backgroundColor: colors.GREEN_SHADE_C,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: height(1),
    paddingHorizontal: width(1.5),
    // borderRadius: width(2),
    width: '98%',
    alignSelf: 'center',
    elevation: 1,
  },

  namazTitle: {
    fontSize: fontSize.MINI,
    fontFamily: fontFamily.REGULAR,
    color: colors.SECONDARY,
  },
  namazTime: {
    fontSize: width(2.5),
    fontFamily: fontFamily.REGULAR,
    color: colors.SECONDARY,
  },
});

export default NamazTable;
