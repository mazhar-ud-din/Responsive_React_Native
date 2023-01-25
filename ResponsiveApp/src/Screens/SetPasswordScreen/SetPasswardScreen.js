import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import HeaderCom from '../../Component/HeaderCom'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import ButtonCom from '../../Component/ButtonCom'
import InputArea from '../../Component/InputArea'
import ConstantImages from '../../Constants/Image/Image'
import Colors from '../../ColorsStyle/Colors'
import { NavigationString } from '../../Navigation/NavigationString/NavigationString'

const SetPasswardScreen = ({ navigation }) => {

  const goToScreen = () => {
    navigation.navigate(NavigationString.FORGETPASSWARD)
  }

  const goToBack = () => {

    navigation.goBack()
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderCom style={{ padding: moderateScale(12) }} onPress={goToBack} />
      <View style={styles.Container}>
        <Text style={styles.HeadingStyle}>Set Password</Text>
        <Text style={styles.TextStyle}>Set a Password for your account (+33)34 56 78901</Text>
        <InputArea
          placeholder={'Set Password'}
          label={'Set Password'}
          source={ConstantImages.EyeIcon}
          inputStyle={{ marginTop: moderateScale(67) }}
          
        />
        <ButtonCom
          onPress={goToScreen}
          Img={ConstantImages.RightArrow}
          btnStyle={{
            width: moderateScale(50),
            marginTop: moderateScale(77),
            alignSelf: 'flex-end',
            borderRadius: moderateScale(25),

          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default SetPasswardScreen

