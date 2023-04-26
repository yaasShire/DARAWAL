import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Settings from './settingsScreen'
const SettingsStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='settings' component={Settings} />
        </Stack.Navigator>
    )
}

export default SettingsStack