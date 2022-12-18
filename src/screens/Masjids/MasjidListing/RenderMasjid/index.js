import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import fontFamily from '../../../../theme/fontFamily';
import fontSize from '../../../../theme/fontSize';
import colors from '../../../../theme/colors';
import images from '../../../../assets/images';
import {width} from '../../../../styles/dimensions';

const RenderMasjid = () => {
  return (
    <View style={[styles.main]}>
      <View style={[styles.left]}>
        <View style={[styles.imageContainer]}>
          <Image style={[styles.masjidImage]} source={images.testMAsjid} />
        </View>
      </View>
      <View style={[styles.textContainer]}>
        <View>
          <Text style={[styles.masjidName]}>{'Masjid nssame'}</Text>
        </View>
        <View>
          <Text style={[styles.masjidAddress]}>{'Masjid Address'}</Text>
        </View>
      </View>
      <View style={[styles.starContainer]}>{/* star svg */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flex: 0.2,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  masjidImage: {
    width: width(12),
    height: width(12),
    borderRadius: 10,
  },
  textContainer: {
    flex: 0.7,
  },
  masjidName: {
    fontSize: fontSize.MEDIUM,
    fontFamily: fontFamily.MEDIUM,
    color: colors.BLACK,
  },
  masjidAddress: {
    fontSize: fontSize.MEDIUM,
    fontFamily: fontFamily.MEDIUM,
    color: colors.BLACK,
  },
  starContainer: {
    flex: 0.1,
    backgroundColor: 'yellow',
  },
});

export default RenderMasjid;
