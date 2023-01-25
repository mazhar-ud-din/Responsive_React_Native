import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React,{useState} from 'react'
import styles from './styles'
import HeaderCom from '../../Component/HeaderCom'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import ButtonCom from '../../Component/ButtonCom'
import InputArea from '../../Component/InputArea'
import ConstantImages from '../../Constants/Image/Image'
import Colors from '../../ColorsStyle/Colors'
import { NavigationString } from '../../Navigation/NavigationString/NavigationString'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const RegisterScreen = ({navigation}) => {

  const [Check,setCheck]=useState(false)
  const goToScreen=()=>{
    navigation.navigate(NavigationString.SETPASSWARD)
  }

  const goToBack=()=>{

    navigation.goBack()
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderCom style={{ padding: moderateScale(12) }} onPress={goToBack} />
      <KeyboardAwareScrollView>
        <View style={styles.Container}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <InputArea
              placeholder={'First Name'}
              label={'First Name'}

            />
            <InputArea
              placeholder={'First Name'}
              label={'First Name'}

            />
          </View>

          <InputArea
            placeholder={'Date of Birth'}
            label={' Date of Birth'}
            inputStyle={{ marginTop: moderateScale(20) }}

          />

          <InputArea
            placeholder={'Phone Number'}
            label={' Phone Number'}
            inputStyle={{ marginTop: moderateScale(20) }}

          />
          <InputArea
            placeholder={'Email'}
            label={'Email'}
            inputStyle={{ marginTop: moderateScale(20) }}

          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <InputArea
              placeholder={'Country'}
              label={'Country'}
            />
            <InputArea
              placeholder={'Postal ZipCode'}
              label={'Postal ZipCode'}
              inputStyle={{ marginTop: moderateScale(20) }}
            />
          </View>
          <InputArea
            placeholder={'Adress'}
            label={'Adress'}
            inputStyle={{ marginTop: moderateScale(20) }}

          />
          <InputArea
            placeholder={'Refferal Code'}
            label={'Refferal Code'}
            inputStyle={{ marginTop: moderateScale(20) }}

          />
          <TouchableOpacity style={styles.BottomView} onPress={()=>setCheck(!Check)}>
            <Image  source={Check?ConstantImages.CheckIcon:ConstantImages.UnCheckIcon} style={styles.imgStyle} />
            <Text style={{ marginLeft: moderateScale(10) }}>
              By Logging in,you agree to Done,Privacy policy and term of Use
            </Text>
          </TouchableOpacity>
          <Text>
          </Text>


          <ButtonCom
          onPress={goToScreen}
            Value={'Continue'}
            btnStyle={{
              width: moderateScale(280),
              marginTop: moderateScale(10),
              marginLeft: moderateScale(20)
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen

