import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../../../theme/colors';
import fontFamily from '../../../../theme/fontFamily';
import fontSize from '../../../../theme/fontSize';

const Time = () => {
    return (<View>
        <Text style={[styles.time]} >03:40 am</Text>
    </View>);
}

const styles = StyleSheet.create({
    time: {
        fontSize: fontSize.EXTRA,
        fontFamily: fontFamily.BOLD,
        color: colors.SECONDARY
    }
})
export default Time;