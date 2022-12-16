import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Drawer from '../../../assets/svgs/Drawer';
import colors from '../../../theme/colors';
import { width, height } from '../../../styles/dimensions'
import fontSize from '../../../theme/fontSize';
import fontFamily from '../../../theme/fontFamily'

const HomeHeader = () => {
    return (<View style={[styles.main]} >
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.drawerContainer]} >
            < Drawer fillColor={colors.PRIMARY} borderColor={colors.SECONDARY} size={width(7)} />
        </TouchableOpacity>
        <View>
            <Text style={[styles.city]} >Karachi</Text>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: height(2)
    },
    drawerContainer: {
        elevation: 5,
        padding: width(2),
        backgroundColor: colors.WHITE,
        borderRadius: width(2)
    },
    city: {
        fontSize: fontSize.MEDIUM,
        fontFamily: fontFamily.MEDIUM,
        color: colors.PRIMARY
    }

})

export default HomeHeader;