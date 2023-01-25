import { StyleSheet, Text, View } from 'react-native'
import { moderateScale,moderateVerticalScale,scale } from 'react-native-size-matters';
import Colors from '../../ColorsStyle/Colors';

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        padding: moderateScale(20),
        marginTop:moderateVerticalScale(25),


    },
    imgStyle: {
        height: moderateScale(25),
        width: moderateScale(25),
        tintColor: Colors.ThemeColor
    },
    BottomView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(20)
    },
    HeadingStyle:{
        fontSize:scale(35),
        fontWeight:'bold',
        textAlign:'center',
        color:'black'
     },
     TextStyle:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:moderateVerticalScale(25)
     }
})

export default styles;