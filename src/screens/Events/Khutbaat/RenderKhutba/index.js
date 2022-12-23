import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../../../theme/colors';
import {height, width} from '../../../../styles/dimensions';
import fontSize from '../../../../theme/fontSize';
import fontFamily from '../../../../theme/fontFamily';
import ClockIcon from '../../../../assets/svgs/Clock';
import MapPointerIcon from '../../../../assets/svgs/MapPointer';

const RenderKhutba = () => {
  return (
    <View style={[styles.main]}>
      <View style={[styles.row]}>
        <View style={[styles.dateContainer]}>
          {/* date */}
          <Text style={[styles.dateMonth]}>{`12`}</Text>
          <Text style={[styles.year]}> {'March,2022'}</Text>
        </View>
        <View style={{flex: 0.75, marginLeft: width(2)}}>
          <View style={[styles.row]}>
            <View style={[styles.nameContainer]}>
              <Text style={[styles.masjidName]}>
                {'Sheikh Ibrahim Junagarhi'}
              </Text>
            </View>
            <View style={[styles.timeContainer]}>
              {/* icon and namaz */}
              <ClockIcon fillColor={colors.GRAY} size={width(3.5)} />
              <Text style={[styles.time]}>{'JUMMA'}</Text>
            </View>
          </View>
          <View style={[styles.locationContainer]}>
            <MapPointerIcon size={width(4)} fillColor={colors.SECONDARY} />
            <Text style={[styles.masjid]}>{`Abu Hurairah Masjid`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.GRAY,
    paddingBottom: height(1),
    marginTop: height(2),
  },
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

  locationContainer: {
    flexDirection: 'row',
    marginTop: height(1),
  },

  masjid: {
    color: colors.GRAY,
    fontFamily: fontFamily.LIGHT,
    fontSize: fontSize.MINI,
    marginLeft: width(2),
  },
  timeContainer: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  time: {
    color: colors.SECONDARY,
    fontFamily: fontFamily.LIGHT,
    fontSize: fontSize.MINI,
    marginLeft: width(2),
  },
});

export default RenderKhutba;
