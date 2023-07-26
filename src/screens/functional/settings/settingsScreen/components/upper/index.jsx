import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import profile from '../../../../../../assets/images/chris.jpg'
import styles from './style'
import { Feather } from '@expo/vector-icons'
import { nameShortner } from '../../../../../../utils'
import placeHolderImage from '../../../../../../assets/images/profile-placeholder.png'
import { postData } from '../../../../../../api/functional/postData';
const UpperProfile = ({ onPress = () => { }, userData = {}, setIsLoading = () => { }, setError = () => { }, getUserData = () => { }, setUserData = () => { } }) => {
    const [image, setImage] = useState(null)
    const [imageName, setImageName] = useState(null)
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        // console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            const data = new FormData()
            const profileImage = result.assets[0].uri.split('/');
            const imageName = profileImage[profileImage.length - 1];
            data.append('profile_picture', {
                name: imageName,
                uri: result.assets[0].uri,
                type: `image/${result.assets[0].uri.slice(-4)}`
            })
            const updateImageData = await postData('agent/user/update', data, setError, setIsLoading)
            console.log(updateImageData)
            if (updateImageData?.result?.status == 'updated successfully') {
                // setUserData()
                getUserData()
                // console.log(updateImageData)
            }
        }
    };
    return (
        <View style={styles.imageNameWrapper}>
            <View style={styles.profileContent}>
                <View style={styles.imageWrapper}>
                    <Image source={!userData?.profile_picture ? placeHolderImage : { uri: `https://sweyn.co.uk/storage/images/avatar/${userData?.profile_picture}` }} style={styles.image} />
                    <Pressable onPress={pickImage} style={{ backgroundColor: "blue", width: 30, height: 30, justifyContent: "center", alignItems: "center", borderRadius: 20, position: "absolute", top: 50, left: 45 }}>
                        <Feather name='camera' size={20} color={'#fff'} />
                    </Pressable>
                </View>
                <View style={styles.namePhoneNumberWrapper}>
                    <Text style={styles.name}>{nameShortner(userData?.name, 25)}</Text>
                    <Text style={styles.phone_number}>{nameShortner(userData?.phone_number, 25)}</Text>
                    <Text style={styles.phone_number}>{nameShortner(userData?.email, 25)}</Text>
                </View>
            </View>
            <Pressable onPress={onPress}>
                <Feather name='edit' size={25} />
            </Pressable>
        </View>
    )
}

export default UpperProfile