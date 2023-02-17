import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import styles from './styles'
import { AxiosDeleteRequest } from '../../Component/AxiosApi'
import ButtonCom from '../../Component/ButtonCom'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import Colors from '../../ColorsStyle/Colors'
import ConstantImages from '../../Constants/Image/Image'
import { useDispatch, useSelector } from 'react-redux'
import { sendData } from '../../Redux/action/SendData'
import { AddMyCard } from '../../Redux/Reducer/Reducer'
import { NavigationString } from '../../Navigation/NavigationString/NavigationString'


const BookingScreen = ({ navigation }) => {
  const dispatch=useDispatch()
  useEffect(() => {
    sendData(dispatch)
  }, [])

  const { CheckData } = useSelector((state) => { return state?.persistedReducer })


    const {CartItems}=useSelector((state)=>{return state?.persistedReducer})

  const renderItem = ({ item }) => {

    const ItemData = () => {
      dispatch(AddMyCard([...CartItems,item]))
    }
    // const getTotal=()=>{
    //   const total=0;
    //   CheckData.map((item)=>{
    //     total=total+item.qty*item.price
    //   })
    //   return total;
    // }

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
              onPress={ItemData}
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>

            {!!item === 0 ? <ButtonCom
              btnStyle={{ width: 40, height: 40 }}
              Value={'+'}
            /> : null}
            {!!item === 0 ? <Text style={{ paddingHorizontal: 10 }}>{'0'}</Text> : null}
            {!!item === 0 ? <ButtonCom
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
          data={CheckData}
          renderItem={renderItem}
          ItemSeparatorComponent={<View style={{ marginBottom: moderateVerticalScale(10) }} />}

        />
      </View>
      <View style={{
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          width: '50%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
          <Text>{`Add Items (${CartItems.length})`}</Text>
          <Text>{`Add Items (${CartItems.length})`}</Text>

        </View>
        <View style={{
          width: '50%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
          <ButtonCom
            btnStyle={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: Colors.ThemeColor,
              width: 80
            }}
            TextStyle={{ color: Colors.ThemeColor, fontSize: 13 }}
            Value={'ViewCard'}
            onPress={() => navigation.navigate(NavigationString.MYCARD)}
          />
        </View>

      </View>
    </View>


  )
}

export default BookingScreen

