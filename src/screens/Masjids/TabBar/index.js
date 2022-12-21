import React, {Component, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {height, width} from '../../../styles/dimensions';
import colors from '../../../theme/colors';
import fontFamily from '../../../theme/fontFamily';
import fontSize from '../../../theme/fontSize';
import {GLOBAL_BORDER_RADIUS} from '../../../utils/logicalConstants';

const TabBar = () => {
  const [activeTab, setActiveTab] = useState('all'); //'all'  or 'nearby'
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
        title={`All`}
        onPress={() => {
          setActiveTab('all');
        }}
        active={activeTab === 'all'}
      />
      <View style={{marginLeft: width(5)}}>
        <RenderTab
          title={`Near by`}
          onPress={() => {
            setActiveTab('nearby');
          }}
          active={activeTab === 'nearby'}
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

export default TabBar;
