import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import colors from '../../theme/colors'
import HomeHeader from './HomeHeader';

const Home = () => {
    return (<View style={[styles.main]}>
        <HomeHeader />
    </View>);
}

const styles = StyleSheet.create({
    main: { flex: 1, backgroundColor: colors.WHITE }
})
export default Home;