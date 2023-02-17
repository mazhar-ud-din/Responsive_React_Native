import React, { useState,useEffect } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { moderateVerticalScale } from 'react-native-size-matters'
import { useSelector ,useDispatch} from 'react-redux'
import { AxiosPostRequest } from '../../Component/AxiosApi'
import ButtonCom from '../../Component/ButtonCom'
import InputArea from '../../Component/InputArea'
import ConstantImages from '../../Constants/Image/Image'
import { NavigationString } from '../../Navigation/NavigationString/NavigationString'
import { check, getData } from '../../Redux/action/SendData'
import styles from './styles'


const LoginScreen = ({ navigation }) => {
  const { InVisable, setVisable } = useState(true)
  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')

  // const dispatch = useDispatch() 
  // useEffect(()=>{
  //   check(dispatch)
  // },[])

  // const {AddMyCard}=useSelector((state)=>{return state?.persistedReducer })
  
  // console.log(`AllgetDat11==>`,AddMyCard); 
  
// const AllData=()=>{  
//   getData({
//     email:email,
//     password:password,
//   })

// } 

//axiospostRequest
  // const getData = async () => {
  //   const Value={
  //     email:email,
  //     password:password,
  //   }
  //   console.log('Value===>',Value)


  //   await AxiosPostRequest(Value)
  //     .then(res =>
  //       console.log('res', res.data)
  //     )
  //     .catch(err =>
  //       console.log('res', err)
  //     )
  // }

  const goToScreen = (screen) => {
    navigation.navigate(screen)
  }

  return (
    <View style={styles.Container}>
      <ImageBackground source={ConstantImages.BabyIcon} style={styles.imgStyle}>
        <Text style={styles.TextStyle}></Text>
      </ImageBackground>
      <KeyboardAwareScrollView bounces={true} extraHeight={280} enableOnAndroid>
        <View style={styles.MainStyle}>
          <InputArea

            label={'Enter Adrees'}
            placeholder={'Enter Email'}
            keyboardType='email-address'
            onChangeText={(email) => setEmail( email )}
          />
          <InputArea

            label={'Enter Password'}
            placeholder={'Enter Password'}
            inputStyle={{ marginTop: moderateVerticalScale(28) }}
            secureTextEntry={InVisable}
            source={ConstantImages.EyeIcon}
            onPress={() => setVisable(!InVisable)}
            onChangeText={(password) => setPassword(password )}


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
      </KeyboardAwareScrollView>
    </View>
  )

}

export default LoginScreen

