import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import fontFamily from '../../../../theme/fontFamily';
import fontSize from '../../../../theme/fontSize';
import colors from '../../../../theme/colors';
import images from '../../../../assets/images';
import {height, width} from '../../../../styles/dimensions';
import Star from '../../../../assets/svgs/Star';
import NamazTable from './NamazTable';

const RenderMasjid = () => {
  return (
    <View style={[styles.main]}>
      <View style={[styles.upperContainer]}>
        <View style={[styles.left]}>
          <View style={[styles.imageContainer]}>
            <Image style={[styles.masjidImage]} source={images.testMAsjid} />
          </View>
        </View>
        <View style={[styles.textContainer]}>
          <View>
            <Text style={[styles.masjidName]}>
              {'Jama Masjid Rashdi AhleHadith (Chhoti Masjid)'}
            </Text>
          </View>
          <View style={{marginTop: height(0.5)}}>
            <Text style={[styles.masjidAddress]}>
              {'gali No. 2 Mossalanae doodh wala ke pass'}
            </Text>
          </View>
        </View>
        <View style={[styles.starContainer]}>
          <TouchableOpacity>
            <Star fillColor={colors.YELLOW_SHADE_A} size={width(6.8)} />
          </TouchableOpacity>
        </View>
      </View>
      <NamazTable />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    borderBottomColor: colors.GRAY,
    borderBottomWidth: 0.5,
    paddingBottom: height(2),
    marginTop: height(2.5),
  },
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flex: 0.2,
  },
  imageContainer: {},
  masjidImage: {
    width: width(14),
    height: width(14),
    borderRadius: 50,
  },
  textContainer: {
    flex: 0.7,
  },
  masjidName: {
    fontSize: fontSize.SMALL,
    fontFamily: fontFamily.SEMI_BOLD,
    color: colors.PRIMARY,
  },
  masjidAddress: {
    fontSize: fontSize.MINI,
    fontFamily: fontFamily.LIGHT,
    color: colors.SECONDARY,
  },
  starContainer: {
    flex: 0.1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
});

export default RenderMasjid;
