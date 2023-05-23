import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AuthButton = ({ label, handleSubmit, errors, navigation, destination = "", color = "", handleOTP }) => {
    return (
        <TouchableOpacity style={styles.actionButton(color)} onPress={() => {
            handleOTP()

        }}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    )
}

export default AuthButton