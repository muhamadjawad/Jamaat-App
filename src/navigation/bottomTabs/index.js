import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { width, height } from '../../styles/dimensions'
import colors from '../../theme/colors';
import Home from '../../screens/Home'
import RenderTabBar from './RenderTab'
import Drawer from '../../assets/svgs/Drawer';
import Splash from '../../screens/Splash';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (<View style={{ backgroundColor: colors.WHITE, flex: 1 }}>
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: styles.tabBar,
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <RenderTabBar
                                focused={focused}
                                title={'Home'}
                                Icon={() => {
                                    return (
                                        < Drawer fillColor={colors.PRIMARY} borderColor={colors.SECONDARY} size={width(5)} />
                                    )
                                }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Task"
                component={Home}
                options={{
                    title: 'Task',
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <RenderTabBar
                                focused={focused}
                                title={'Masjid'}
                                Icon={() => {
                                    return (
                                        < Drawer fillColor={colors.PRIMARY} borderColor={colors.SECONDARY} size={width(5)} />
                                    )
                                }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Status"
                component={Splash}
                options={{
                    title: 'Status',
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <RenderTabBar
                                focused={focused}
                                title={'Events'}
                                Icon={() => {
                                    return (
                                        < Drawer fillColor={colors.PRIMARY} borderColor={colors.SECONDARY} size={width(5)} />
                                    )
                                }}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    </View>);
}
const styles = StyleSheet.create({
    tabBar: {
        height: height(8.1),
        backgroundColor: colors.WHITE, // 'transparent',
        width: '100%',
        alignSelf: 'center',
        elevation:0,
        // paddingBottom:height(2)
    },
})


export default BottomTabs;