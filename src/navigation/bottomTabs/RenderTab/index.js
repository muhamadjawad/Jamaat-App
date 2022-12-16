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
                <View style={[{ top: "-50%" }, styles.outerCircle]}  >
                    <View
                        style={[styles.circle]}
                    >
                        <Icon />
                    </View>
                </View>

                :
                <Icon />
            }
        </View>
        <View style={{ height: '35%' }}>
            <Text style={[styles.title]} >{title}</Text>
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

    // 
    outerCircle: {
        width: width(15),
        height: width(15),
        backgroundColor: colors.WHITE,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: '80%',
        height: '80%',
        backgroundColor: colors.PRIMARY,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default RenderTab;