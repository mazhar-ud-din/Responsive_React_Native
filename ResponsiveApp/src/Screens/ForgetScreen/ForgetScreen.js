import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView ,ke} from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import HeaderCom from '../../Component/HeaderCom'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import ButtonCom from '../../Component/ButtonCom'
import InputArea from '../../Component/InputArea'
import ConstantImages from '../../Constants/Image/Image'
import Colors from '../../ColorsStyle/Colors'
import { NavigationString } from '../../Navigation/NavigationString/NavigationString'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const ForgetScreen = ({ navigation }) => {

  const goToScreen = () => {
    navigation.navigate(NavigationString.LOGIN)
  }

  const goToBack = () => {

    navigation.goBack()
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <HeaderCom style={{ padding: moderateScale(12) }} onPress={goToBack} />
      <KeyboardAwareScrollView>
      <View style={styles.Container}>
       <View style={{alignItems:'center'}}>
       <Image source={ConstantImages.LockIcon} style={styles.imgStyle} />

       </View>
       
        <View >
        <Text style={styles.HeadingStyle}>Forget Password</Text>
        <Text style={styles.TextStyle}>Enter The Email Adress associated with your account</Text>
        </View>

        <View>
        <InputArea
          placeholder={'Set Password'}
          label={'Set Password'}
          source={ConstantImages.EyeIcon}
          inputStyle={{ marginTop: moderateScale(67) }}

        />
        <ButtonCom
          onPress={goToScreen}
          Value={"Send"}
          btnStyle={{
            width: moderateScale(280),
            marginTop: moderateScale(77),
            marginLeft:moderateScale(20)
        
          }}
        />
        </View>
      </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default ForgetScreen

