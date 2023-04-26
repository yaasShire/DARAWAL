import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
const CustomButton = ({ color, label }) => {
    return (
        <View style={styles.buttonWrapper(color)}>
            <Text style={styles.buttonText}>{label}</Text>
        </View>
    )
}
export default CustomButton