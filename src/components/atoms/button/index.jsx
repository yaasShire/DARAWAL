import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTrip } from '../../../redux/activeTrip'
const CustomButton = ({ color, label, setShowGoAnimation, bottomSheet, data = {}, navigation, onPress = () => { } }) => {
    const dispatch = useDispatch()

    return (
        <TouchableOpacity style={styles.buttonWrapper(color)} onPress={onPress}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    )
}
export default CustomButton