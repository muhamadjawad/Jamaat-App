import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { height } from '../../../../styles/dimensions';
import colors from '../../../../theme/colors';
import fontFamily from '../../../../theme/fontFamily';
import fontSizes from '../../../../theme/fontSize';

const IslamicDate = () => {
    return (<View  style={{marginTop:height(2)}}>
        <Text style={[styles.date]} >{`14,Safar\n1449`}</Text>
    </View>);
}
const styles = StyleSheet.create({
    date: {
        fontSize: fontSizes.MEDIUM,
        fontFamily: fontFamily.ITALIC,
        color: colors.PRIMARY
    }
})
export default IslamicDate;