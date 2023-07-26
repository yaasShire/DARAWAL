import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import { Ionicons } from '@expo/vector-icons'
import phone from '../../../../assets/images/phone.png'
import Whatsapp from '../../../../assets/images/whatsapp.png'
import privacyImage from '../../../../assets/images/privacyImage.png'
import Header from '../../../../components/molecules/header'
import StatusBarComponent from '../../../../components/atoms/statusBar'
const HelpCenter = ({ navigation }) => {
    const openWhatsApp = () => {
        let msg = "Hello Yusuf";
        let mobile = "612518368";
        if (mobile) {
            if (msg) {
                let url =
                    "whatsapp://send?text=" +
                    "Hello World hello" +
                    "&phone=91" +
                    "612518368";
                Linking.openURL(url)
                    .then(data => {
                        console.log("WhatsApp Opened successfully " + data);
                    })
                    .catch(() => {
                        alert("Make sure WhatsApp installed on your device");
                    });
            } else {
                alert("Please enter message to send");
            }
        } else {
            alert("Please enter mobile no");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBarComponent />
            <View>
                <Header navigation={navigation} backButton={true} title={"Help Center"} />
            </View>
            <ScrollView>
                <View style={styles.imageHolder}>
                    <Image source={privacyImage} style={styles.image} />
                </View>
                <View style={styles.welcomTextHolderWrapper}>
                    <Text style={styles.welcomText}>How can we help you?</Text>
                    <Text style={styles.descriptionHolder}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem, perferendis facere deserunt delectus odit.
                        Sequi eos quos necessitatibus ipsum, sed quod quae numquam mollitia.
                        Laboriosam animi perspiciatis unde reprehenderit?</Text>
                </View>
                <View style={styles.cardsHolder}>
                    <TouchableOpacity style={styles.card} onPress={() => {
                        Linking.openURL(
                            'http://api.whatsapp.com/send?phone=252' + "612518368"
                        );
                    }}>
                        <Image source={Whatsapp} style={styles.emailIcon} />
                        <Text>Chat with us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => {
                        Linking.openURL(`tel:612518368`)
                    }}>
                        <Image source={phone} style={styles.emailIcon} />
                        <View style={styles.textCallUsHolder}>
                            <Text style={styles.text}>Call Us</Text>
                            <Text style={styles.text}>0612636436</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HelpCenter