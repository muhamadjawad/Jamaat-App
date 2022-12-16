import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { height, width } from '../../../../styles/dimensions';
import colors from '../../../../theme/colors';
import fontFamily from '../../../../theme/fontFamily';
import fontSize from '../../../../theme/fontSize';
import { GLOBAL_BORDER_RADIUS } from '../../../../utils/logicalConstants';

const RenderTiming = ({ title, active = false }) => {
    return (<View style={[styles.main, active ? styles.active : ""]}
    >
        <View>
            <Text style={[styles.text, active ? styles.activeText : ""]} >{title}</Text>
        </View>
        <View>
            <Text style={[styles.text, active ? styles.activeText : ""]}  >5:30 am</Text>
        </View>

    </View>);
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1.2,
        borderColor: colors.GREEN_SHADE_B,
        borderRadius: GLOBAL_BORDER_RADIUS,
        paddingHorizontal: width(2.5),
        paddingVertical: height(1.5),
        marginTop: height(2),
    },
    active: {
        backgroundColor: colors.GREEN_SHADE_B,
        borderWidth: 0,
        paddingVertical: height(2),
        elevation: 2,
        margin: 1
    }
    ,
    text: {
        fontSize: fontSize.SMALL,
        fontFamily: fontFamily.REGULAR,
        color: colors.PRIMARY
    },
    activeText: {
        fontSize: fontSize.MEDIUM,
        fontFamily: fontFamily.ITALIC,
        color: colors.WHITE
    },

})
export default RenderTiming;