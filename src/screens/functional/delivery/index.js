import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Delivery from './deliveryScreen'
import ShopLocation from './shopLocation'
import OTP from './otp'
const DeliveryStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='delivery' component={Delivery} />
            <Stack.Screen name='shopLocation' component={ShopLocation} />
            <Stack.Screen name='otp' component={OTP} />
        </Stack.Navigator>
    )
}

export default DeliveryStack