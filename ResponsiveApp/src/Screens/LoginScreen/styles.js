import { StyleSheet } from 'react-native'
import { moderateScale,moderateVerticalScale,scale } from 'react-native-size-matters';
import Colors from '../../ColorsStyle/Colors';

const styles = StyleSheet.create({
    Container:{
       flex:1
    },
    imgStyle:{
        width:'100%',
        height:moderateScale(230),
        justifyContent:'center',
        alignItems:'center',

    },
    TextStyle:{
        fontSize:scale(44),
        color:'white',
        fontWeight:'bold'
    },
    MainStyle:{
        marginTop:moderateVerticalScale(20),
        paddingHorizontal:moderateScale(10),
        paddingVertical:moderateScale(25),
},
forgetStyle:{
    alignSelf:'flex-end',
    marginTop:moderateScale(25),
    color:Colors.ThemeColor,
    fontWeight:'bold'
},
BottomStyle:{
   flexDirection:'row',
   justifyContent:'center',
   marginTop:moderateVerticalScale(25)


},
BottomTextStyle:{
    color:Colors.ThemeColor,
}

    
})

export default styles;