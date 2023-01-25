import React from 'react'
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import DummyData from './DummyData'
import ConstantImages from '../../Constants/Image/Image'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import ButtonCom from '../../Component/ButtonCom'
import Colors from '../../ColorsStyle/Colors'

const HomeScreen = ({navigation}) => {

  const renderItem = ({ item }) => {
    return (
      <View style={styles.FlatListStyle}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: moderateVerticalScale(18) }}>
          <View>
            <Text>{item?.date}</Text>
            <Text style={{fontSize:scale(25),fontWeight:'bold',color:'#000'}}>{item?.name}</Text>
            <Text>{item?.Adress}</Text>
          </View>
          <Image source={ConstantImages.ProfileIcon} style={{ width: moderateScale(64), height: moderateScale(64), borderRadius: moderateScale(32) }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: moderateVerticalScale(18), marginVertical: moderateVerticalScale(15) }}>
          <Text>Price</Text>
          <Text>{item?.price}</Text>

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: moderateVerticalScale(20) }}>
          <View style={{ flex: 1,marginHorizontal:moderateScale(10) }}>
            <ButtonCom
              Value={'Accept'}
              btnStyle={{
                backgroundColor:'white',
                borderWidth:1,
                borderColor:Colors.ThemeColor
              }}
              TextStyle={{color:Colors.ThemeColor}}
            />
          </View>

          <View style={{ flex: 1 }}>
            <ButtonCom
              Value={'Reject'}
            />
          </View>

        </View>

      </View>

    )

  }
  return (
    <View style={styles.Container}>
      <View style={styles.HeaderStyle}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={ConstantImages.ArrowIcon} style={styles.imgStyle}/>
        </TouchableOpacity>
        <Text style={styles.TextStyle}>Product Details</Text>
        <Image source={ConstantImages.BellIcon} style={styles.imgStyle} />
      </View>
      <View style={styles.MainFlatStyle}>
        <FlatList
          data={DummyData}
          renderItem={renderItem}
          ItemSeparatorComponent={<View style={{ marginBottom: moderateVerticalScale(10) }} />}

        />
      </View>
    </View>
  )
}

export default HomeScreen