import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthButton from '../../../components/atoms/button'
import successImage from '../../../assets/success.png'
const Success = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textHolder}>
                <Text style={styles.title}>Password changed Successfully</Text>
            </View>
            <View style={styles.imageHolder}>
                <Image source={successImage} style={styles.image} />
            </View>
            <View style={styles.buttonHolder}>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <AuthButton title="Go back login" navigation={navigation} destination="login" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Success