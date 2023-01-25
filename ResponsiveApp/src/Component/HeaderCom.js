import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import ConstantImages from '../Constants/Image/Image'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'

const HeaderCom=({onPress})=>{
  return (
<TouchableOpacity onPress={onPress}>
    <Image source={ConstantImages.ArrowIcon} style={styles.imgStyle}/>
</TouchableOpacity>

    )
}

export default  HeaderCom

const styles = StyleSheet.create({
    imgStyle:{
        height:moderateScale(30),
        width:moderateVerticalScale(30)
    }
})