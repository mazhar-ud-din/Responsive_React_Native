import React from 'react'
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const InputArea = ({
    label,
    placeholder,
    onChangeText,
    inputStyle,
    keyboardType,
    source,
    onPress,
    TextInputStyle
}) => {
    return (
        <View style={{ ...styles.inputStyle, ...inputStyle }}>
            <Text style={styles.labelStyle} >{label}</Text>
            <View style={styles.rowStyle}>
                <TextInput
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    style={{...styles.TextInputStyle,...TextInputStyle}}
                    keyboardType={keyboardType}
                    secureTextEntry
                />
                {source ?
                    <TouchableOpacity onPress={onPress}>
                        <Image source={source} style={styles.imgStyle} />
                    </TouchableOpacity> : null}

            </View>
        </View>
    )
}

export default InputArea

const styles = StyleSheet.create({
    inputStyle: {
        borderBottomWidth: 1,
        borderRadius: moderateScale(6)
    },
    TextInputStyle: {

        padding: moderateScale(10),
        color: 'rgba(0,0,0,1)',
        fontSize: 16,

    },
    labelStyle: {
        color: 'rgba(0,0,0,1)',
        fontSize: 14
    },
    imgStyle: {
        width: 30,
        height: 30
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})