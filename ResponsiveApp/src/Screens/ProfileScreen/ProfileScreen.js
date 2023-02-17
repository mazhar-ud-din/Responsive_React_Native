import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { sendData } from '../../Redux/action/SendData'

const ProfileScreen = () => {

  const dispatch = useDispatch()

  console.log('hello', dispatch);
 
useEffect(()=>{
sendData(dispatch)
},[])
  const { CheckData } = useSelector((state) => { return state?.persistedReducer })

  console.log(`DummyData11`, CheckData)

  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen
