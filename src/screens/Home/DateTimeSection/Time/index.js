import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../../../theme/colors';
import fontFamily from '../../../../theme/fontFamily';
import fontSizes from '../../../../theme/fontSize';

const Time = () => {
    return (<View>
        <Text style={[styles.time]} >03:40 am</Text>
    </View>);
}

const styles = StyleSheet.create({
    time: {
        fontSize: fontSizes.EXTRA,
        fontFamily: fontFamily.BOLD,
        color: colors.SECONDARY
    }
})
export default Time;