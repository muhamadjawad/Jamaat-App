import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { height } from '../../../../styles/dimensions';
import colors from '../../../../theme/colors';
import fontFamily from '../../../../theme/fontFamily';
import fontSize from '../../../../theme/fontSize';

const IslamicDate = () => {
    return (<View  style={{marginTop:height(1.5)}}>
        <Text style={[styles.date]} >{`14,Safar\n1449`}</Text>
    </View>);
}
const styles = StyleSheet.create({
    date: {
        fontSize: fontSize.SMALL,
        fontFamily: fontFamily.ITALIC,
        color: colors.PRIMARY
    }
})
export default IslamicDate;