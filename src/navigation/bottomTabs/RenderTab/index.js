import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { height, width } from '../../../styles/dimensions';
import colors from '../../../theme/colors';
import fontFamily from '../../../theme/fontFamily';
import fontSize from '../../../theme/fontSize';

const RenderTab = ({ title = '', focused, Icon }) => {
    return (<View style={[styles.main]}>
        <View style={{ height: '65%', justifyContent: 'center' }}  >
            {focused ?
                <View style={[{
                    top: "-20%"
                }, styles.outerCircle]}  >
                    <Icon size={width(8)} color={colors.PRIMARY} />
                </View>

                :
                <Icon color={colors.GRAY} size={width(6)} />
            }
        </View>
        <View style={{ height: '35%' }}>
            <Text style={[styles.title, focused ? styles.focusedTitle : ""]} >{title}</Text>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: colors.GRAY,
        fontFamily: fontFamily.REGULAR,
        fontSize: fontSize.MINI
    },
    focusedTitle: {
        color: colors.PRIMARY,
        fontFamily: fontFamily.SEMI_BOLD,
        fontSize: fontSize.MINI
    },
    // 
    outerCircle: {
        width: width(14),
        height: width(14),
        backgroundColor: colors.WHITE,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // circle: {
    //     width: '100%',
    //     height: '100%',
    //     backgroundColor: colors.WHITE,
    //     borderRadius: 50,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // }
})
export default RenderTab;