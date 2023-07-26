import { View, Text, StatusBar, Platform, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import styles from './style.js'
import Header from '../../../../components/molecules/header/index.jsx'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons.js';
import AntiDesign from 'react-native-vector-icons/AntDesign.js';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import { Button, Divider } from 'react-native-paper'
import PrivacyAndPolicy from '../privacyAndPolicy/index.jsx'
import HelpCenter from '../helpCenter/index.jsx'
import LogOutModal from '../components/modal/index.jsx'
import AsyncStorage from '@react-native-async-storage/async-storage'
import UpperProfile from './components/upper/index.jsx'
import EditProfileDataModal from './components/editProfileDataModal/index.jsx'
import { fetchData } from '../../../../api/functional/fetchData.js'
import AppLoader from '../../../../components/atoms/appLoader/index.jsx'
import { RefreshControl } from 'react-native-gesture-handler'
import StatusBarComponent from '../../../../components/atoms/statusBar/index.jsx'
const Settings = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [userData, setUserData] = useState({})
    const [editProfile, setEditProfile] = useState(false)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false)
    const logout = async () => {
        await AsyncStorage.setItem("access_token", "")
        await AsyncStorage.setItem("token_type", "")
        await AsyncStorage.setItem("user", "")
    }

    const getUserData = async () => {
        // setRefreshing(true)
        const { data } = await fetchData('agent/user/view', setError, setIsLoading)
        console.log(data)
        setUserData(data?.data[0])
        if (data?.data[0]) {
            // setRefreshing(false)
        }
    }
    useEffect(() => {
        getUserData()
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <StatusBarComponent />
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getUserData} />}>
                <View>
                    <Header title={"Settings"} navigation={navigation} />
                </View>
                <View style={styles.miniContainer}>
                    <UpperProfile setUserData={setUserData} getUserData={getUserData} setIsLoading={setIsLoading} setError={setError} userData={userData} onPress={() => setEditProfile(true)} />
                    <ScrollView contentContainerStyle={{ rowGap: 5 }}>
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
                        <TouchableOpacity onPress={() => { setVisible(true) }} style={styles.logOutSectionWrapper}>
                            <AntiDesign name='logout' size={25} color={"red"} />
                            <Text style={styles.logOutText}>Log out</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <LogOutModal logout={logout} visible={visible} setVisible={setVisible} navigation={navigation} />
                <EditProfileDataModal getUserData={getUserData} userData={userData} editProfile={editProfile} setEditProfile={setEditProfile} />
                {

                }
                {
                    isLoading && <AppLoader />
                }
            </ScrollView>

        </SafeAreaView>
    )
}

export default Settings