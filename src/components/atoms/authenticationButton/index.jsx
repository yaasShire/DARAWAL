import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AuthenticationButton = ({ handleSubmit = () => { }, title = "", errors = {} }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => {
            handleSubmit()
            console.log(errors)
        }}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AuthenticationButton