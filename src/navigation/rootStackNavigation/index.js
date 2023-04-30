import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoarding from '../../screens/auth/onBoarding'
import BottomTabs from '../bottomTabs'
import AuthStack from '../../screens/auth'
const RootStackNavigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='authStack' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='authStack' component={AuthStack} />
                <Stack.Screen name='bottomTabs' component={BottomTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStackNavigation