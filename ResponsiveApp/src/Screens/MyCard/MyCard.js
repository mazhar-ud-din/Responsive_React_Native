import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import Colors from '../../ColorsStyle/Colors'
import ButtonCom from '../../Component/ButtonCom'
import ConstantImages from '../../Constants/Image/Image'
import styles from './styles'
import { useSelector } from 'react-redux'


const MyCard = ({ navigation }) => {

    const { CartItems } = useSelector((state) => { return state?.persistedReducer })
console.log('===>',CartItems);


    const renderItem = ({ item }) => {

        return (
            <View style={styles.FlatListStyle}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: moderateVerticalScale(18) }}>
                    <Image source={item.src} style={{ width: moderateScale(120), height: moderateScale(80), }} />
                    <View>
                        <Text style={{ fontSize: scale(20), fontWeight: 'bold', color: '#000' }} >{item?.name}</Text>
                        <Text style={{ fontSize: scale(15), fontWeight: 'bold', color: '#000' }}>{item?.Brand}</Text>
                        <Text>{item?.price}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: moderateVerticalScale(20) }}>
                    <View style={{ flex: 1, marginHorizontal: moderateScale(10) }}>
                        <ButtonCom
                            Value={'Add To Card'}
                            btnStyle={{
                                backgroundColor: 'white',
                                borderWidth: 1,
                                borderColor: Colors.ThemeColor
                            }}
                            TextStyle={{ color: Colors.ThemeColor }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>

                        {!!item !== 0 ? <ButtonCom
                            btnStyle={{ width: 40, height: 40 }}
                            Value={'+'}
                        /> : null}
                        {!!item !== 0 ? <Text style={{ paddingHorizontal: 10 }}>{item.qty}</Text> : null}
                        {!!item !== 0 ? <ButtonCom
                            Value={'-'}
                            btnStyle={{ width: 40, height: 40 }}
                        /> : null}
                    </View>
                </View>

            </View>

        )
    }
    return (
        <View style={styles.Container}>
            <View style={styles.HeaderStyle}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={ConstantImages.ArrowIcon} style={styles.imgStyle} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Product Details</Text>
                <Image source={ConstantImages.BellIcon} style={styles.imgStyle} />
            </View>
            <View style={styles.MainFlatStyle}>
                <FlatList
                    data={CartItems}
                    renderItem={renderItem}
                    ItemSeparatorComponent={<View style={{ marginBottom: moderateVerticalScale(10) }} />}

                />
            </View>
        </View>


    )
}

export default MyCard

