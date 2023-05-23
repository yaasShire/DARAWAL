import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTrip } from '../../../redux/activeTrip'
const OTPButton = ({ color, label, setShowGoAnimation, bottomSheet, data = {}, navigation }) => {
    const dispatch = useDispatch()

    return (
        <TouchableOpacity style={styles.buttonWrapper(color)} onPress={() => {
            label == 'Start' && setShowGoAnimation(true)
            label == 'Start' && bottomSheet.current.close()
            label == 'Start' && dispatch(setActiveTrip(data))
            label == 'Start' && data ? navigation.navigate("otpVerification") : ""
        }}>
            <Text style={styles.buttonText}>{(label == 'Start' && data) ? 'SEND OTP' : label}</Text>
        </TouchableOpacity>
    )
}
export default OTPButton