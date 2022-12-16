import React, { Component } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native';
import { height } from '../../styles/dimensions';
import colors from '../../theme/colors'
import { GLOBAL_SCREEN_PADDING } from '../../utils/logicalConstants';
import DateTimeSection from './DateTimeSection';
import HomeHeader from './HomeHeader';
import NamazTimings from './NamazTimings';

const Home = () => {
    return (<View style={[styles.main]}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: height(5) }} showsVerticalScrollIndicator={false}  >
            <HomeHeader />
            <DateTimeSection />
            <NamazTimings />
        </ScrollView>
    </View>);
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.WHITE,
        paddingHorizontal: GLOBAL_SCREEN_PADDING,
    }
})
export default Home;