import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import {
    ChooseAccount,
    ForgetScreen,
    LoginScreen,
    RegisterScreen,
    SetPasswardScreen
} from '../Screens';
import BottomTab from './BottomTab';
import { NavigationString } from './NavigationString/NavigationString';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
<>
<StatusBar translucent backgroundColor="transparent"  barStyle = 'light-content' />


        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={NavigationString.LOGIN} component={LoginScreen} />
            <Stack.Screen name={NavigationString.FORGETPASSWARD} component={ForgetScreen} />
            <Stack.Screen name={NavigationString.SETPASSWARD} component={SetPasswardScreen} />
            <Stack.Screen name={NavigationString.COOSEACCOUNT} component={ChooseAccount} />
            <Stack.Screen name={NavigationString.REGISTER} component={RegisterScreen} />
            <Stack.Screen name={NavigationString.BOTTOMTAB} component={BottomTab} />
        
        </Stack.Navigator>
        </>

    )
}

export default AuthStack