import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import { height, width } from '../../../styles/dimensions';
import colors from '../../../theme/colors';
import CurrentNamaz from './CurrentNamaz';
import IslamicDate from './IslamicDate';
import Time from './Time';
import {GLOBAL_BORDER_RADIUS} from '../../../utils/logicalConstants'

const DateTimeSection = () => {
    return (<View style={[styles.main]}>
        <View style={[styles.left]} >
            <Time />
            <IslamicDate />
        </View>
        <View style={[styles.right]} >
            <CurrentNamaz />
        </View>
    </View>);
}

const styles = StyleSheet.create({

    main: {
        backgroundColor: colors.TERNARY,
        flexDirection: 'row',
        borderRadius:  GLOBAL_BORDER_RADIUS,
        paddingHorizontal:width(3),
        paddingVertical:height(2),
        marginHorizontal:width(1),
        marginTop:height(3),
        elevation:1.5,
        margin:0.1
    },
    left: { flex: 0.5 },
    right: { flex: 0.5 }
})
export default DateTimeSection;