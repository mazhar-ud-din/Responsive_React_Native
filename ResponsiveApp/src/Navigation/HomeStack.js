import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomTab from './BottomTab';
import { NavigationString } from './NavigationString/NavigationString';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (

        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={NavigationString.BOTTOMTAB} component={BottomTab} />
        </Stack.Navigator>

    )
}

export default HomeStack