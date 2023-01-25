import { StyleSheet, Text, View } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

const styles = StyleSheet.create({

    Container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center'
    },
    HeadingStyle:{
       fontSize:scale(35),
       fontWeight:'bold',
       textTransform:'uppercase',
       textAlign:'center'
    },
    icSStyle:{
        height:moderateScale(54),
        width:moderateScale(54),
    },
    imgStyle:{
        alignItems:'center'

    },
    icSStylef:{
        height:moderateScale(74),
        width:moderateScale(74),
    },
    TextStyle:{
        fontSize:scale(30),
        fontWeight:'bold'
    }
    
})

export default styles;