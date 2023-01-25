import React, { useState } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import ButtonCom from '../../Component/ButtonCom'
import InputArea from '../../Component/InputArea'
import ConstantImages from '../../Constants/Image/Image'
import { NavigationString } from '../../Navigation/NavigationString/NavigationString'
import styles from './styles'


const LoginScreen = ({ navigation }) => {
  const { InVisable, setVisable } = useState(true)

  const goToScreen = (screen) => {
    navigation.navigate(screen)
  }

  return (
    <View style={styles.Container}>
      <ImageBackground source={ConstantImages.BabyIcon} style={styles.imgStyle}>
        <Text style={styles.TextStyle}>LOGINs</Text>
      </ImageBackground>

      <View style={styles.MainStyle}>
        <InputArea

          label={'Enter Adrees'}
          placeholder={'Enter Email'}
          keyboardType='email-address'
        />
        <InputArea

          label={'Enter Password'}
          placeholder={'Enter Password'}
          inputStyle={{ marginTop: moderateVerticalScale(28) }}
          secureTextEntry={InVisable}
          source={ConstantImages.EyeIcon}
          onPress={() => setVisable(!InVisable)}

        />
        <TouchableOpacity onPress={() => goToScreen(NavigationString.FORGETPASSWARD)}>
          <Text style={styles.forgetStyle}>Forget Password ?</Text>
        </TouchableOpacity>

        <ButtonCom
          onPress={() => goToScreen(NavigationString.BOTTOMTAB)}
          btnStyle={{ marginTop: moderateVerticalScale(40) }}
          Value={'Login'}
        />

      </View>
      <View style={styles.BottomStyle}>
        <Text>Not a Member?</Text>
        <TouchableOpacity onPress={() => goToScreen(NavigationString.COOSEACCOUNT)}>
          <Text style={styles.BottomTextStyle}>Join Now</Text>
        </TouchableOpacity>
      </View>

    </View>
  )

}

export default LoginScreen

