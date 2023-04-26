import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { Avatar, Badge } from 'react-native-paper';
import profile from '../../../assets/images/chris.jpg'
import Feather from 'react-native-vector-icons/Feather';
import profile2 from '../../../assets/images/justin.jpg'
import { Appbar } from 'react-native-paper';
import { colors } from '../../../constants/globalStyles';

const Header = ({ navigation, profile = false, backButton = false, title = "", bellIcon = false }) => {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    return (
        // <View style={styles.header}>
        //     <Avatar.Image size={50} source={profile} />
        //     {/* <Text style={styles.title}>Home Screen</Text> */}
        //     <TouchableOpacity onPress={() => {
        //         navigation.navigate("notification")
        //     }}>
        //         <Badge size={18} style={styles.badge}>4</Badge>
        //         <Feather name='bell' size={30} />
        //     </TouchableOpacity>

        // </View>
        <Appbar.Header mode='center-aligned' style={{ justifyContent: "space-between", backgroundColor: colors.primary }}>
            {backButton ? <Appbar.BackAction onPress={() => navigation.goBack()} /> : profile && <Avatar.Image size={50} source={profile2} />}
            {title && <Appbar.Content title={title} color={colors.tertiary} />}
            {bellIcon && (
                <TouchableOpacity onPress={() => {
                    navigation.navigate("notification")
                }}>
                    <Badge size={18} style={styles.badge}>4</Badge>
                    <Feather name='bell' size={30} />
                </TouchableOpacity>
            )}
        </Appbar.Header>
    )
}

export default Header