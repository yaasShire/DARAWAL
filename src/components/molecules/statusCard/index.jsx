import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import profileImage from '../../../assets/images/chris.jpg'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntiDesign from 'react-native-vector-icons/AntDesign';
const StatusCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.upperContent}>
                <View style={styles.imageNameWrapper}>
                    <View style={styles.imageWrapper}>
                        <Image source={profileImage} style={styles.profileImage} />
                    </View>
                    <View>
                        <Text style={styles.userName}>Chris Hemsworth</Text>
                        <Text style={styles.levelText}>Basic level</Text>
                    </View>
                </View>
            </View>
            <View style={styles.tripStatusCard}>
                <View style={styles.statusColumn}>
                    <View style={styles.iconWrapper}>
                        <Feather name='check' size={25} color={"#11B134"} />
                    </View>
                    <View style={styles.percentageStatusTextWrapper}>
                        <Text style={styles.percentNumber}>50%</Text>
                        <Text style={styles.columnText}>Trips accepted</Text>
                    </View>
                </View>
                <View style={styles.statusColumn}>
                    <View style={styles.iconWrapper}>
                        <AntiDesign name='star' size={25} color={"#e8b017"} />
                    </View>
                    <View style={styles.percentageStatusTextWrapper}>
                        <Text style={styles.percentNumber}>50%</Text>
                        <Text style={styles.columnText}>Rating</Text>
                    </View>
                </View>
                <View style={styles.statusColumn}>
                    <View style={styles.iconWrapper}>
                        <FontAwesome name='close' size={25} color={"#b51705"} />
                    </View>
                    <View style={styles.percentageStatusTextWrapper}>
                        <Text style={styles.percentNumber}>50%</Text>
                        <Text style={styles.columnText}>Cancelled</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default StatusCard