import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Settings from './settingsScreen'
import PrivacyAndPolicy from './privacyAndPolicy'
import HelpCenter from './helpCenter'
const SettingsStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='settings' component={Settings} />
            <Stack.Screen name='privacy' component={PrivacyAndPolicy} />
            <Stack.Screen name='helpCenter' component={HelpCenter} />
        </Stack.Navigator>
    )
}

export default SettingsStack