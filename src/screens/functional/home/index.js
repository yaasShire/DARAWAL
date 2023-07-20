import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './homeScreen'
import Notification from './notificationScreen'
// import ShopLocation from './shopLocation'
import OTPVerification from './otpVerification'
// import GoogleMaps from './test'
const HomeStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName='googleMaps' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='notification' component={Notification} />
            <Stack.Screen name='otpVerification' component={OTPVerification} />
            {/* <Stack.Screen name='googleMaps' component={GoogleMaps} /> */}
        </Stack.Navigator>
    )
}

export default HomeStack