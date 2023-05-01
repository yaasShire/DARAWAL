import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const CustomButton = ({ color, label, setShowGoAnimation, bottomSheet }) => {
    return (
        <TouchableOpacity style={styles.buttonWrapper(color)} onPress={() => {
            label == 'Start' && setShowGoAnimation(true)
            label == 'Start' && bottomSheet.current.close()
        }}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    )
}
export default CustomButton