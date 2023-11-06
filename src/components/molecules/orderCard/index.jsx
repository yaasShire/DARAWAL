import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';
import { colors } from '../../../constants/globalStyles';
// import * as Linking from 'expo-linking';

const OrderCard = ({ order, onAccept, onReject, phone, distance, setModalVisible = () => { }, setorderId = () => { }, setTargetOrder = () => { }, accept = true, showPhoneCall = true, navigation = {}, navigateMap = false }) => {
    //   const { id, pickup, dropoff, shopImage } = order;

    const handlePhonePress = () => {
        Linking.openURL(`tel:${order?.shop_location?.phone_number}`);
    };
    const orderId = order?.order_details?.UOID?.split('-')[order?.order_details?.UOID?.split('-').length - 1]
    return (
        <View style={styles.card}>
            <Image style={styles.shopImage} source={{ uri: `https://api.elabis.app/storage/images/shops/${order?.shop_location?.photos}` }} />
            <Text style={styles.shopName}>{order?.shop_location?.name}</Text>
            <Text style={styles.id}>Order Id #{orderId}</Text>
            <View style={styles.addressContainer}>
                <View style={styles.locationIconContainer}>
                    <Feather name="map-pin" size={16} color="green" />
                </View>
                <Text style={styles.address}>{order?.shop_location?.landmark}</Text>
            </View>
            <View style={styles.addressContainer}>
                <View style={styles.locationIconContainer}>
                    <Feather name="map-pin" size={16} color="red" />
                </View>
                <Text style={styles.address}>{order?.drop_location?.additional_information}</Text>
            </View>
            {/* <View style={styles.addressContainer}>
                <View style={styles.locationIconContainer}>
                    <Feather name="clock" size={16} color="#777" />
                </View>
                <Text style={styles.address}>{distance} away</Text>
        </View>  */}
            <View View style={styles.buttons} >
                {
                    accept && (
                        <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={() => {
                            setorderId(order?.order_details?.UOID)
                            setTargetOrder(order)
                            onAccept()
                        }}>
                            <Text style={styles.buttonText}>Accept</Text>
                        </TouchableOpacity>
                    )
                }
                {/* <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={onReject}>
                    <Text style={styles.buttonText}>Reject</Text>
                </TouchableOpacity> */}
                {
                    showPhoneCall && (
                        <TouchableOpacity style={styles.phoneButton} onPress={handlePhonePress}>
                            <Feather name="phone" size={24} color="#fff" />
                        </TouchableOpacity>
                    )
                }
                {
                    navigateMap && (
                        <TouchableOpacity style={[styles.phoneButton, styles.shopButton]} onPress={() => {
                            navigation.navigate("shopLocation", { order })
                        }}>
                            <Entypo name="shop" size={24} color="#fff" />
                        </TouchableOpacity>
                    )
                }
            </View >
        </View >
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        elevation: 5,
    },
    shopImage: {
        width: '100%',
        height: 150,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1
    },
    shopName: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    id: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    locationIconContainer: {
        marginRight: 5,
    },
    address: {
        fontSize: 14,
        color: '#777',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    acceptButton: {
        backgroundColor: '#2ecc71',
        marginRight: 10,
    },
    rejectButton: {
        backgroundColor: '#e74c3c',
        marginRight: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    phoneButton: {
        backgroundColor: '#3498db',
        borderRadius: 5,
        padding: 10,
    },
    shopButton: {
        backgroundColor: colors.lagoon
    }
});

export default OrderCard;