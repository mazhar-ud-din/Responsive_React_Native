import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Colors from '../ColorsStyle/Colors'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import ConstantImages from '../Constants/Image/Image'

const ButtonCom = ({ btnStyle, Value, onPress, Img,TextStyle }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={{ ...styles.btnStyle, ...btnStyle }}>
                {Img ? <Image source={ConstantImages.RightArrow} style={{ height: moderateScale(20), width: moderateScale(20) }} /> : <Text style={{...styles.TextStyle,...TextStyle}}>{Value}</Text>}

            </View>
        </TouchableOpacity>
    )
}

export default ButtonCom


const styles = StyleSheet.create({
    btnStyle: {
        height: moderateScale(48),
        backgroundColor: Colors.ThemeColor,
        borderRadius: moderateScale(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextStyle: {
        fontSize: scale(15),
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }

})