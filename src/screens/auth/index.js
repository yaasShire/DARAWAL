import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoardingIntro from './onBoarding'
import Login from './login'
import OTP from './otp'
const AuthStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName='otp' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='onBoarding' component={OnBoardingIntro} />
            <Stack.Screen name='login' component={Login} />
            <Stack.Screen name='otp' component={OTP} />
        </Stack.Navigator>
    )
}

export default AuthStack