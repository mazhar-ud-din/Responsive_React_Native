import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import HeaderCom from '../../Component/HeaderCom'
import ButtonCom from '../../Component/ButtonCom'
import { moderateVerticalScale, moderateScale } from 'react-native-size-matters'
import ConstantImages from '../../Constants/Image/Image'
import { NavigationString } from '../../Navigation/NavigationString/NavigationString'

const ChooseAccount = ({ navigation }) => {

  const goToScreen = (screen) => {
    navigation.navigate(screen)
  }
  const goToBack = () => {
    navigation.goBack()
  }
  return (
    <SafeAreaView style={{ flex: 1 }}  >
      <View style={{ padding: moderateScale(12) }}>
        <HeaderCom onPress={goToBack} />
      </View>

      <View style={styles.Container} >

        <Text style={styles.HeadingStyle}>Please Choose Your Account</Text>
        <View style={styles.imgStyle}>
          <Image source={ConstantImages.HomeIcon} style={styles.icSStyle} />
          <Text style={styles.TextStyle}>Agency</Text>
        </View>
        <View style={styles.imgStyle}>
          <Image source={ConstantImages.ProfileIcon} style={styles.icSStylef} />
          <Text style={styles.TextStyle}>Freelancer</Text>
        </View>
        <ButtonCom
          btnStyle={{
            width: moderateScale(320),
            marginBottom: 30
          }}
          Value={'Continoue'}
          onPress={() => goToScreen(NavigationString.REGISTER)}
        />
      </View>

    </SafeAreaView>

  )
}

export default ChooseAccount

