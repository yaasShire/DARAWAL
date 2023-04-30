import { View, Text, StatusBar, Platform, Image, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import styles from './style.js'
import Header from '../../../../components/molecules/header/index.jsx'
import profile from '../../../../assets/images/chris.jpg'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons.js';
import AntiDesign from 'react-native-vector-icons/AntDesign.js';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import { Divider } from 'react-native-paper'
import PrivacyAndPolicy from '../privacyAndPolicy/index.jsx'
import HelpCenter from '../helpCenter/index.jsx'
const Settings = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'android' ? 'light-content' : 'dark-content'} />
            <View>
                <Header title={"Settings"} navigation={navigation} />
            </View>
            <View style={styles.miniContainer}>
                <View style={styles.imageNameWrapper}>
                    <View style={styles.imageWrapper}>
                        <Image source={profile} style={styles.image} />
                    </View>
                    <Text style={styles.name}>Chris Hemsworth</Text>
                </View>
                <ScrollView contentContainerStyle={{ rowGap: 5 }}>
                    <View style={styles.actionsWrapper}>
                        <View style={styles.sectionTitleWrapper}>
                            <Text style={styles.sectionActionTitle}>Account information</Text>
                        </View>
                        <View style={styles.actionsGroupWrapper}>
                            <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("walletStack", {
                                screen: "wallet"
                            })} >
                                <View style={styles.iconNameWrapper}>
                                    <Ionicons name='wallet-outline' size={25} />
                                    <Text style={styles.actionName}>Wallet</Text>
                                </View>
                                <Entypo name='chevron-right' size={25} style={styles.chevronIcon} />

                            </TouchableOpacity>
                            <Divider />
                            <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("historyStack", {
                                screen: "history"
                            })}>
                                <View style={styles.iconNameWrapper}>
                                    <Feather name='clock' size={25} />
                                    <Text style={styles.actionName}>History</Text>
                                </View>
                                <Entypo name='chevron-right' size={25} style={styles.chevronIcon} />

                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.actionsWrapper}>
                        <View style={styles.sectionTitleWrapper}>
                            <Text style={styles.sectionActionTitle}>Privacy & Help center</Text>
                        </View>
                        <View style={styles.actionsGroupWrapper}>
                            <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('privacy')}>
                                <View style={styles.iconNameWrapper}>
                                    <MaterialIcons name='privacy-tip' size={25} />
                                    <Text style={styles.actionName}>Privacy & Policy</Text>
                                </View>
                                <Entypo name='chevron-right' size={25} style={styles.chevronIcon} />

                            </TouchableOpacity>
                            <Divider />
                            <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('helpCenter')}>
                                <View style={styles.iconNameWrapper}>
                                    <Feather name='help-circle' size={25} />
                                    <Text style={styles.actionName}>Help center</Text>
                                </View>
                                <Entypo name='chevron-right' size={25} style={styles.chevronIcon} />

                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.logOutSectionWrapper}>
                        <AntiDesign name='logout' size={25} color={"red"} />
                        <Text style={styles.logOutText}>Log out</Text>
                    </TouchableOpacity>
                </ScrollView>

            </View>

        </SafeAreaView>
    )
}

export default Settings