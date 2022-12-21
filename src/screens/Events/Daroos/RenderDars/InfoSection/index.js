import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EventIcon from '../../../../../assets/svgs/Event';
import colors from '../../../../../theme/colors';
import {width} from '../../../../../styles/dimensions';
import fontSize from '../../../../../theme/fontSize';
import fontFamily from '../../../../../theme/fontFamily';

const InfoSection = () => {
  return (
    <View style={[styles.row]}>
      <View style={[styles.dateContainer]}>
        {/* date */}
        <Text style={[styles.dateMonth]}>{`12,March`}</Text>
        <Text style={[styles.year]}>{'2022'}</Text>
      </View>
      <View style={{flex: 0.8}}>
        <View style={[styles.row]}>
          <View style={[styles.nameContainer]}>
            <Text style={[styles.masjidName]}>{'Masjid Name'}</Text>
          </View>
          <View style={[styles.timeContainer]}>
            {/* icon and namaz */}
            <EventIcon fillColor={colors.GRAY} size={width(5)} />
            <Text style={[styles.time]}>{'Asar'}</Text>
          </View>
        </View>
        <View style={[styles.titleContainer]}>
          <Text
            style={[
              styles.title,
            ]}>{`Title : adwrw adwrw adwrw adwrw adwrw adwrw`}</Text>
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
    flex: 0.2,
    backgroundColor: colors.GRAY,
  },
  dateMonth: {
    color: colors.SECONDARY,
    fontSize: fontSize.SMALL,
    fontFamily: fontFamily.BOLD,
  },
  year: {
    color: colors.SECONDARY,
    fontSize: fontSize.SMALL,
    fontFamily: fontFamily.REGULAR,
  },
  nameContainer: {
    flex: 0.75,
    backgroundColor: 'red',
  },
  masjidName: {
    color: colors.PRIMARY,
    fontSize: fontSize.MEDIUM,
    fontFamily: fontFamily.SEMI_BOLD,
  },

  titleContainer: {},

  title: {
    color: colors.GRAY,
    fontFamily: fontFamily.LIGHT,
    fontSize: fontSize.SMALL,
  },
  timeContainer: {
    flex: 0.25,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
  },
  time: {
    color: colors.GRAY,
    fontFamily: fontFamily.LIGHT,
    fontSize: fontSize.MINI,
  },
});

export default InfoSection;
