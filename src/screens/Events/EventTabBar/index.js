import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {height, width} from '../../../styles/dimensions';
import colors from '../../../theme/colors';
import fontFamily from '../../../theme/fontFamily';
import fontSize from '../../../theme/fontSize';

const EventTabBar = ({activeEvent, setActiveEvent}) => {
  //
  //
  const RenderTab = ({title = '', active = false, onPress}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.tab, active ? styles.activeTab : '']}>
        <Text style={[styles.text, active ? styles.activeTabText : '']}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={[styles.main]}>
      <RenderTab
        title={`khutbaat`}
        onPress={() => {
          setActiveEvent('khutbaat');
        }}
        active={activeEvent === 'khutbaat'}
      />
      <View style={{marginLeft: width(5)}}>
        <RenderTab
          title={`daroos`}
          onPress={() => {
            setActiveEvent('daroos');
          }}
          active={activeEvent === 'daroos'}
        />
      </View>
      <View style={{marginLeft: width(5)}}>
        <RenderTab
          title={`conference`}
          onPress={() => {
            setActiveEvent('conference');
          }}
          active={activeEvent === 'conference'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: height(3),
    flexDirection: 'row',
  },
  tab: {
    backgroundColor: colors.WHITE,
    borderRadius: width(50),
    paddingVertical: height(0.5),
    paddingHorizontal: width(3),
    borderWidth: 1,
    borderColor: colors.PRIMARY,
  },
  activeTab: {
    backgroundColor: colors.PRIMARY,
  },
  text: {
    fontSize: fontSize.SMALL,
    fontFamily: fontFamily.MEDIUM,
    color: colors.PRIMARY,
  },
  activeTabText: {
    color: colors.WHITE,
    fontFamily: fontFamily.SEMI_BOLD,
  },
});

export default EventTabBar;
