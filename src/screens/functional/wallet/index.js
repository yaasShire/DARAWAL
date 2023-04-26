import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Wallet from './walletScreen'
const WalletStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='wallet' component={Wallet} />
        </Stack.Navigator>
    )
}

export default WalletStack