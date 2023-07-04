import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
// import { Switch } from 'react-native-paper'
import Switch from '../../../../../../components/atoms/switch'
const Status = ({ isSwitchOn = false, onToggleSwitch = () => { } }) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <View style={styles.onlineWrapper}>
            <Text style={styles.onlineText}>GO ONLINE</Text>
            <Switch onpress={() => setIsActive(prev => !prev)} isActive={isActive} size={40} />
        </View>
    )
}

export default Status