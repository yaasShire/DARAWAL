import { View, Text, TouchableOpacity, Platform, TouchableWithoutFeedback, Pressable } from 'react-native'
import React from 'react'
import styles from './style'
import { Avatar, Badge } from 'react-native-paper';
import profile from '../../../assets/images/chris.jpg'
import Feather from 'react-native-vector-icons/Feather';
import profile2 from '../../../assets/images/justin.jpg'
import { Appbar } from 'react-native-paper';
import { colors } from '../../../constants/globalStyles';

const Header = ({ navigation, profile = false, backButton = false, title = "", bellIcon = false, color = "", textColor = "#000", bgColor = "#fff", bellIconColor = "#000", backButtonColor = "#fff" }) => {

    return (
        // <Appbar.Header mode='center-aligned' style={styles.header(bgColor)}>
        //     {backButton ? <Appbar.BackAction size={30} onPress={() => navigation.goBack()} /> : profile && <TouchableWithoutFeedback onPress={() => navigation.navigate("settingsStack", {
        //         screen: "settings"
        //     })}><Avatar.Image size={50} source={profile2} /></TouchableWithoutFeedback>}
        //     {title && <Appbar.Content title={title} color={textColor ? textColor : colors.tertiary} />}
        //     {bellIcon && (
        //         <TouchableOpacity onPress={() => {
        //             navigation.navigate("notification")
        //         }}>
        //             <Badge size={18} style={styles.badge}>4</Badge>
        //             <Feather name='bell' size={30} color={bellIconColor} />
        //         </TouchableOpacity>
        //     )}
        // </Appbar.Header>
        <View style={styles.header(bgColor)}>
            {
                backButton && (
                    <Pressable style={{ alignContent: "flex-start", }} onPress={() => navigation.goBack()}>
                        <Feather name='chevron-left' color={backButtonColor} size={35} />
                    </Pressable>
                )
            }
            {
                title && (
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title(textColor)}>{title}</Text>
                    </View>
                )
            }
            {
                bellIcon && (
                    <Pressable style={{ alignItems: "flex-end", flex: 1, }} onPress={() => navigation.navigate("notification")}>
                        <Badge size={18} style={styles.badge}>4</Badge>
                        <Feather name='bell' size={30} color={bellIconColor} />
                    </Pressable>
                )
            }
        </View>
    )
}

export default Header