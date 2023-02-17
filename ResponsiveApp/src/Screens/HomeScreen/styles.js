import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import Colors from '../../ColorsStyle/Colors';

const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    HeaderStyle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: moderateVerticalScale(30),
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:moderateScale(15)
    },
    MainFlatStyle: {
        marginTop: moderateScale(40),
        

    },
    TextStyle: {
        fontSize: scale(20),
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: Colors.ThemeColor
    },
    imgStyle: {
        width: moderateScale(25),
        height: moderateScale(25)
    },
    FlatListStyle: {
        paddingVertical: moderateVerticalScale(15),
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
    }


})

export default styles;