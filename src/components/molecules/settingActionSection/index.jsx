import { View, Text } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import { Divider } from 'react-native-paper'
import styles from './style'
const SettingActionSection = ({sectionTitle="", }) => {
    return (
        <View style={styles.actionsWrapper}>
            <View style={styles.sectionTitleWrapper}>
                <Text style={styles.sectionActionTitle}>Account information</Text>
            </View>
            <View style={styles.actionsGroupWrapper}>
                <View style={styles.actionButton}>
                    <View style={styles.iconNameWrapper}>
                        <Ionicons name='wallet-outline' size={25} />
                        <Text style={styles.actionName}>Wallet</Text>
                    </View>
                    <Entypo name='chevron-right' size={25} style={styles.chevronIcon} />

                </View>
                <Divider />
                <View style={styles.actionButton}>
                    <View style={styles.iconNameWrapper}>
                        <Feather name='clock' size={25} />
                        <Text style={styles.actionName}>History</Text>
                    </View>
                    <Entypo name='chevron-right' size={25} style={styles.chevronIcon} />

                </View>
            </View>
        </View>
    )
}

export default SettingActionSection