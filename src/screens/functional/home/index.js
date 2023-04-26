import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './homeScreen'
import Notification from './notificationScreen'
// import ShopLocation from './shopLocation'
import ShopLocation from './shopLocation'
const HomeStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='notification' component={Notification} />
            <Stack.Screen name='shopLocation' component={ShopLocation} />
        </Stack.Navigator>
    )
}

export default HomeStack