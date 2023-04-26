import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Delivery from './deliveryScreen'
const DeliveryStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='delivery' component={Delivery} />
        </Stack.Navigator>
    )
}

export default DeliveryStack