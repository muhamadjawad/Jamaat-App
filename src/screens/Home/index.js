import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import colors from '../../theme/colors'
import { GLOBAL_SCREEN_PADDING } from '../../utils/logicalConstants';
import DateTimeSection from './DateTimeSection';
import HomeHeader from './HomeHeader';
import NamazTimings from './NamazTimings';

const Home = () => {
    return (<View style={[styles.main]}>
        <HomeHeader />
        <DateTimeSection />
        <NamazTimings />
    </View>);
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.WHITE,
        paddingHorizontal: GLOBAL_SCREEN_PADDING
    }
})
export default Home;