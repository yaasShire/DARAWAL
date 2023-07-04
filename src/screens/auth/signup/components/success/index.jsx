import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { Button } from 'react-native'
import resetPasswordImage from '../../../../../assets/images/resetpassword.png'
const VerificationMessage = ({ navigation = () => { }, description = "", screen = "", setVerificationMessage }) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                <View>
                    <Image source={resetPasswordImage} style={styles.image} />
                </View>
                <View style={styles.descriptionButtonWrapper}>
                    <Text style={styles.text}>{description}</Text>
                    <Button title='Log in' onPress={() => {
                        navigation.navigate('login')
                        setVerificationMessage(false)
                    }
                    } />
                </View>
            </View>
        </View>
    )
}

export default VerificationMessage