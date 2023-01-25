import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConstantImages from '../Constants/Image/Image';
import { BookingScreen, HomeScreen, ProfileScreen } from '../Screens';
import { NavigationString } from './NavigationString/NavigationString';
import {Image} from 'react-native'
import styles from '../Screens/LoginScreen/styles';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Colors from '../ColorsStyle/Colors';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (

    <Tab.Navigator
      screenOptions={{ 
        headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle:{
        height:moderateScale(60),
      }
       }}
       
       
    >
      <Tab.Screen
        name={NavigationString.HOME} component={HomeScreen}
        options={{
          tabBarIcon:
            ({focused})=>{
              return <Image source={ConstantImages.HomesIcon} style={{width:moderateScale(30),height:moderateScale(30),tintColor:focused?Colors.ThemeColor:'black'}} />
            }
          
        }}
         />
      <Tab.Screen
      options={{
          tabBarIcon:
            ({focused})=>{
              return <Image source={ConstantImages.BookIcon} style={{width:moderateScale(30),height:moderateScale(30), tintColor:focused?Colors.ThemeColor:'black'}} />
            }
          
        }}
        name={NavigationString.PROFILE} component={ProfileScreen} />
      <Tab.Screen
      options={{
          tabBarIcon:
            ({focused})=>{
              return <Image source={ConstantImages.UserIcon} style={{width:moderateScale(30),height:moderateScale(30),tintColor:focused?Colors.ThemeColor:'black'}} />
            }
          
        }}
        name={NavigationString.BOOKING} component={BookingScreen} />

    </Tab.Navigator>
  );
}
export default BottomTab