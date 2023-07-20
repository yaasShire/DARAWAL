import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './style'
import notFoundImage from '../../../assets/images/notFound.png'
import { Feather } from '@expo/vector-icons'
import { colors } from '../../../constants/globalStyles'
const NoDataFound = ({ fetchOrders = () => { } }) => {
    return (
        <View style={styles.container}>
            <Image source={notFoundImage} style={styles.image} />
            <Text style={styles.description}>New orders will appear here</Text>
            <Pressable style={styles.refresh} onPress={fetchOrders}>
                <Feather name='refresh-ccw' size={30} color={colors.primary} />
            </Pressable>
        </View>
    )
}

export default NoDataFound