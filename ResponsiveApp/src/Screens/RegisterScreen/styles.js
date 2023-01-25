import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../ColorsStyle/Colors';

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        padding: moderateScale(20),

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
    }
})

export default styles;