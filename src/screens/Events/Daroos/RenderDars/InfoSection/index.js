import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EventIcon from '../../../../../assets/svgs/Event';
import colors from '../../../../../theme/colors';
import {height, width} from '../../../../../styles/dimensions';
import fontSize from '../../../../../theme/fontSize';
import fontFamily from '../../../../../theme/fontFamily';
import ClockIcon from '../../../../../assets/svgs/Clock';

const InfoSection = () => {
  return (
    <View style={[styles.row, {marginTop: height(1.5)}]}>
      <View style={[styles.dateContainer]}>
        {/* date */}
        <Text style={[styles.dateMonth]}>{`12`}</Text>
        <Text style={[styles.year]}>{'March,2022'}</Text>
      </View>
      <View style={{flex: 0.75, marginLeft: width(2)}}>
        <View style={[styles.row]}>
          <View style={[styles.nameContainer]}>
            <Text style={[styles.masjidName]}>{'Rashidi Masjid'}</Text>
          </View>
          <View style={[styles.timeContainer]}>
            {/* icon and namaz */}
            <ClockIcon fillColor={colors.GRAY} size={width(4)} />
            <Text style={[styles.time]}>{'Asar'}</Text>
          </View>
        </View>
        <View style={[styles.titleContainer]}>
          <Text
            style={[styles.title]}>{`Title : Deen per amal kese mumkin`}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateContainer: {
    flex: 0.25,
    alignItems: 'center',
  },
  dateMonth: {
    color: colors.SECONDARY,
    fontSize: fontSize.LARGE,
    fontFamily: fontFamily.BOLD,
    textAlign: 'center',
  },
  year: {
    color: colors.SECONDARY,
    fontSize: fontSize.MINI,
    fontFamily: fontFamily.REGULAR,
    //
    marginTop: height(0.5),
  },
  nameContainer: {
    flex: 0.75,
  },
  masjidName: {
    color: colors.PRIMARY,
    fontSize: fontSize.SMALL,
    fontFamily: fontFamily.SEMI_BOLD,
  },

  titleContainer: {},

  title: {
    color: colors.GRAY,
    fontFamily: fontFamily.LIGHT,
    fontSize: fontSize.MINI,
  },
  timeContainer: {
    flex: 0.25,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  time: {
    color: colors.SECONDARY,
    fontFamily: fontFamily.LIGHT,
    fontSize: fontSize.MINI,
    marginLeft: width(2),
  },
});

export default InfoSection;
