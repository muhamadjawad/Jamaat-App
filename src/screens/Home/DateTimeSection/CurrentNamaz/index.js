import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { height, width } from '../../../../styles/dimensions';
import colors from '../../../../theme/colors';
import fontFamily from '../../../../theme/fontFamily';
import fontSizes from '../../../../theme/fontSize';
import { GLOBAL_BORDER_RADIUS } from '../../../../utils/logicalConstants';

const CurrentNamaz = () => {
    return (<View style={[styles.main]}  >
        <View style={[styles.namazContainer]}  >
            <Text style={[styles.namaz]}>MAGHRIB</Text>
        </View>
        <View style={{ marginTop: height(2) }}  >
            <Text style={[styles.remaining]} >2 hr 43 min left</Text>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
    },
    namazContainer: {
        backgroundColor:colors.PRIMARY,
        padding:width(2),
        borderRadius:GLOBAL_BORDER_RADIUS
    },
    namaz: {
        color:colors.WHITE,
        fontFamily:fontFamily.SEMI_BOLD,
        fontSize:fontSizes.LARGE
    },
    remaining: {
        
        color:colors.SECONDARY,
        fontFamily:fontFamily.REGULAR,
        fontSize:fontSizes.SMALL
    }
})

export default CurrentNamaz;