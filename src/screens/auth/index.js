import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoardingIntro from './onBoarding'
import Login from './login'
import OTP from './otp'
import Signup from './signup'
import ResetPassword from './resetPassword'
import Pending from './pending'
const AuthStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='onBoarding' component={OnBoardingIntro} />
            <Stack.Screen name='login' component={Login} />
            <Stack.Screen name='signup' component={Signup} />
            <Stack.Screen name='pending' component={Pending} />
            <Stack.Screen name='otp' component={OTP} />
            <Stack.Screen name='resetpassword' component={ResetPassword} />
        </Stack.Navigator>
    )
}

export default AuthStack