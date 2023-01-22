import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
    ChooseAccount,
    ForgetScreen,
    HomeScreen,
    LoginScreen,
    SetPasswardScreen
} from '../Screens';
import { NavigationString } from './NavigationString/NavigationString';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        
            <Stack.Navigator>
                <Stack.Screen name={NavigationString.HOME} component={HomeScreen} />
                <Stack.Screen name={NavigationString.LOGIN} component={LoginScreen} />
                <Stack.Screen name={NavigationString.FORGETPASSWARD} component={ForgetScreen} />
                <Stack.Screen name={NavigationString.SETPASSWARD} component={SetPasswardScreen} />
                <Stack.Screen name={NavigationString.COOSEACCOUNT} component={ChooseAccount} />

            
            </Stack.Navigator>
      
    )
}

export default AuthStack