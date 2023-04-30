import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import image1 from '../../../assets/images/justin.jpg'
const HistoryCard = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.upperContent}>
                <View style={styles.imageAddressWrapper}>
                    <Image source={data.image} style={styles.image} />
                    <View>
                        <Text style={styles.shopName}>{data.shopName}</Text>
                        <Text style={styles.shopLocation}>{data.pickupPoint}</Text>
                    </View>
                </View>
                <View style={styles.feeWrapper}>
                    <Text style={styles.feeText}>Fee</Text>
                    <Text style={styles.feeAmmount}>${data.fee}</Text>
                </View>
            </View>
        </View>
    )
}

export default HistoryCard