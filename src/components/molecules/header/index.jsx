import { View, Text, TouchableOpacity, Platform, TouchableWithoutFeedback, Pressable } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import styles from './style'
import { Avatar, Badge } from 'react-native-paper';
import profile from '../../../assets/images/chris.jpg'
import Feather from 'react-native-vector-icons/Feather';
import profile2 from '../../../assets/images/justin.jpg'
import { Appbar } from 'react-native-paper';
import { colors } from '../../../constants/globalStyles';
import { fetchData } from '../../../api/functional/fetchData';
import { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

const Header = ({ navigation, profile = false, backButton = false, title = "", bellIcon = false, color = "", textColor = "#000", bgColor = "#fff", bellIconColor = "#000", backButtonColor = "#fff" }) => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [count, setCount] = useState(0)
    const getOrdersCount = async () => {
        const data = await fetchData('agent/orders/unassigned', setError, setIsLoading)
        if (data?.data?.data?.length > 0) {
            setCount(data?.data?.data?.length)
        }
    }
    useFocusEffect(
        useCallback(() => {
            getOrdersCount()
        }, [])
    )
    return (
        <View style={styles.header(bgColor)}>
            {
                backButton && (
                    <Pressable style={{ alignContent: "flex-start", }} onPress={() => navigation.goBack()}>
                        <Feather name='chevron-left' color={backButtonColor} size={35} />
                    </Pressable>
                )
            }
            {
                title && (
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title(textColor)}>{title}</Text>
                    </View>
                )
            }
            {
                bellIcon && (
                    <Pressable style={{ alignItems: "flex-end", flex: 1, }} onPress={() => navigation.navigate("notification")}>
                        <Badge size={18} style={styles.badge}>{count}</Badge>
                        <Feather name='bell' size={30} color={bellIconColor} />
                    </Pressable>
                )
            }
        </View>
    )
}

export default Header