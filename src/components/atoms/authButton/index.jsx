import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AuthButton = ({ title, handleSubmit, errors, navigation, destination = "", color = "" }) => {
    return (
        <TouchableOpacity style={styles.actionButton(color)} onPress={() => {
            handleSubmit && handleSubmit()
            navigation && navigation.navigate(destination)

        }}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AuthButton