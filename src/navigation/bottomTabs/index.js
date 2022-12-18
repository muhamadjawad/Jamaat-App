import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import {width, height} from '../../styles/dimensions';
import colors from '../../theme/colors';
import Home from '../../screens/Home';
import RenderTabBar from './RenderTab';
import Drawer from '../../assets/svgs/Drawer';
import Splash from '../../screens/Splash';
import Mosque from '../../assets/svgs/Mosque';
import HomeIcon from '../../assets/svgs/Home';
import EventIcon from '../../assets/svgs/Event';
import Masjids from '../../screens/Masjids';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <View style={{backgroundColor: colors.WHITE, flex: 1}}>
      <Tab.Navigator
        initialRouteName="Masjids"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: styles.tabBar,
        }}>
        <Tab.Screen
          name="Event"
          component={Home}
          options={{
            // title: 'Home',
            tabBarIcon: ({size, focused, color}) => {
              return (
                <RenderTabBar
                  focused={focused}
                  title={'Events'}
                  Icon={({color, size}) => {
                    return <EventIcon fillColor={color} size={size} />;
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({size, focused, color}) => {
              return (
                <RenderTabBar
                  focused={focused}
                  title={'Home'}
                  Icon={({color, size}) => {
                    return <HomeIcon fillColor={color} size={size} />;
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Masjids"
          component={Masjids}
          options={{
            tabBarIcon: ({size, focused, color}) => {
              return (
                <RenderTabBar
                  focused={focused}
                  title={'Masjids'}
                  Icon={({color, size}) => {
                    return <Mosque fillColor={color} size={size} />;
                  }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    height: height(8.1),
    backgroundColor: colors.WHITE, // 'transparent',
    width: '100%',
    alignSelf: 'center',
    elevation: 0,
    // marginTop: height(4),
    borderTopWidth: 0,

    // paddingBottom:height(2)
  },
});

export default BottomTabs;
