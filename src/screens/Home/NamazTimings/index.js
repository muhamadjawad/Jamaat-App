import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { height } from '../../../styles/dimensions';
import colors from '../../../theme/colors';
import fontFamily from '../../../theme/fontFamily';
import fontSize from '../../../theme/fontSize';
import { NAMAZ_KE_AUQAAT } from '../../../utils/textConstants'
import RenderTiming from './RenderTiming';

const NamazTimings = () => {

    let namazArray = ['Fajar', 'SunRise', 'Zuhar', 'Asar', 'Maghrib', 'Isha'];

    return (<View style={[styles.main]}>
        <View>
            <Text style={[styles.namazHeading]} >{NAMAZ_KE_AUQAAT}</Text>
        </View>
        <View  style={{marginTop:height(1)}} >
            {namazArray.map((item, index) => <RenderTiming  key={index} title={item} active={index===5} />)}
        </View>
    </View>);
}
const styles = StyleSheet.create({
    main: { marginTop: height(4) },
    namazHeading: {
        fontSize: fontSize.LARGE,
        fontFamily: fontFamily.BOLD,
        color: colors.PRIMARY,
        textAlign: 'center'
    }
})

export default NamazTimings;