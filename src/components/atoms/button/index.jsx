import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTrip } from '../../../redux/activeTrip'
const CustomButton = ({ color, label, setShowGoAnimation, bottomSheet, data = {}, navigation }) => {
    const dispatch = useDispatch()
    const activeTrip = useSelector(state => state.activeTrip.activeTrip)
    return (
        <TouchableOpacity style={styles.buttonWrapper(color)} onPress={() => {
            label == 'Start' && !activeTrip?.id ? setShowGoAnimation(true) : ""
            label == 'Start' && bottomSheet.current.close()
            label == 'Start' && !activeTrip?.id ? dispatch(setActiveTrip(data)) : ""
            label == 'Start' && activeTrip?.id ? navigation.navigate("otpVerification") : ""
        }}>
            <Text style={styles.buttonText}>{label == 'Start' && activeTrip?.id ? 'Send OTP' : label}</Text>
        </TouchableOpacity>
    )
}
export default CustomButton