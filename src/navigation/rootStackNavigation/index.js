import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoarding from '../../screens/auth/onBoarding'
import BottomTabs from '../bottomTabs'
import AuthStack from '../../screens/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActivityIndicator } from 'react-native-paper'
const RootStackNavigation = () => {
    const Stack = createNativeStackNavigator()

    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        const fetchLoginStatus = async () => {
            const loginStatus = await AsyncStorage.getItem('access_token');
            setIsLoggedIn(!!loginStatus);
        };

        fetchLoginStatus();
    }, []);

    if (isLoggedIn === null) {
        return
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size={100} />
        </View>
    }

    const initialRouteName = isLoggedIn ? 'bottomTabs' : 'login';

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
                <Stack.Screen name='authStack' component={AuthStack} />
                <Stack.Screen name='bottomTabs' component={BottomTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStackNavigation