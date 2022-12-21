import React, {Component} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import SearchIcon from '../assets/svgs/Search';
import Star from '../assets/svgs/Star';
import {height, width} from '../styles/dimensions';
import colors from '../theme/colors';
import fontFamily from '../theme/fontFamily';
import fontSize from '../theme/fontSize';
import {GLOBAL_BORDER_RADIUS} from '../utils/logicalConstants';

const SearchBar = ({value = '', onChangeText, placeholder = ''}) => {
  return (
    <View style={[styles.main]}>
      <View style={{flex: 0.85}}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.GRAY}
          value={value}
          style={[
            styles.input,
            value === '' ? styles.placeholderText : styles.inputText,
          ]}
          onChangeText={onChangeText}
        />
      </View>
      <View
        style={{flex: 0.15, alignItems: 'flex-end', justifyContent: 'center'}}>
        {/* search svg */}
        <TouchableOpacity style={[styles.button]}>
          <SearchIcon fillColor={colors.WHITE} size={width(5)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    height: height(6),
    alignItems: 'center',
    marginTop: height(2),
    paddingHorizontal: 2,
  },
  input: {
    borderRadius: GLOBAL_BORDER_RADIUS,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: colors.WHITE,
    elevation: 4,
    paddingHorizontal: width(3),
    //
  },
  placeholderText: {
    fontFamily: fontFamily.ITALIC,
    fontSize: fontSize.SMALL,
    color: colors.GRAY,
  },
  inputText: {
    fontFamily: fontFamily.REGULAR,
    fontSize: fontSize.SMALL,
    color: colors.SECONDARY,
  },
  button: {
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderRadius: GLOBAL_BORDER_RADIUS,
  },
});
export default SearchBar;
