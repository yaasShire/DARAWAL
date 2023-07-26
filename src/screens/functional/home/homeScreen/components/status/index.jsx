import { View, Text } from 'react-native'
import React, { useCallback, useState } from 'react'
import styles from './style'
// import { Switch } from 'react-native-paper'
import Switch from '../../../../../../components/atoms/switch'
import { postData } from '../../../../../../api/functional/postData'
import { fetchData } from '../../../../../../api/functional/fetchData'
import { useFocusEffect } from '@react-navigation/native'
const Status = ({ isSwitchOn = false, onToggleSwitch = () => { } }) => {
    const [isActive, setIsActive] = useState(false)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const toggleStatus = async () => {
        const { result } = await postData('agent/user/status', {}, setError, setIsLoading)
        if (result?.length > 0) {
            setIsActive(prev => !prev)
        }
    }
    const readStatus = async () => {
        const { data } = await fetchData('agent/user/visiblity', setError, setIsLoading)
        setIsActive(Number(data[0]?.is_active))
    }
    useFocusEffect(
        useCallback(() => {
            readStatus()
        }, [])
    )

    return (
        <View style={styles.onlineWrapper}>
            <Text style={styles.onlineText}>GO ONLINE</Text>
            <Switch onpress={() => {
                toggleStatus()

            }} isActive={isActive} size={40} />
        </View>
    )
}

export default Status