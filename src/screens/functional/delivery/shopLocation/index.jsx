import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StatusBar, Platform, Button, TouchableOpacity, Image, Dimensions, StyleSheet, Linking, Pressable } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { FAB } from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../../constants/globalStyles';
import CustomButton from '../../../../components/atoms/button';
import GoAnimation from '../../../../assets/animations/go';
import styles from './style'
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postData } from '../../../../api/functional/postData';
import VerifyOtpModal from './components/verifyOtpModal';
import SendOTPModal from './components/otpModal';
import StatusBarComponent from '../../../../components/atoms/statusBar';
import * as Location from 'expo-location';

const ShopLocation = ({ navigation, route }) => {
    const [showGoAnimation, setShowGoAnimation] = useState(false)
    const [deliveryToShopTripStarted, setDeliveryToShopTripStarted] = useState(false)
    const [deliveryToCustomerTripStarted, setDeliveryToCustomerTripStarted] = useState(false)
    const [otpModal, setOtpModal] = useState(false)
    const [origin, setOrigin] = useState({ latitude: 10.2033, longitude: 48.7192 })
    const [destination, setDestination] = useState({ latitude: 9.7866, longitude: 49.3653 })
    const [driveToShop, setDriveToShop] = useState(true)
    const [pickupData, setPickupData] = useState({})
    const [location, setLocation] = useState({
        latitude: 2.046934,
        longitude: 45.318161,
    });
    const [errorMsg, setErrorMsg] = useState(null);
    const [dropData, setDropData] = useState({})
    const [showStartTripToCustomer, setShowStartTripToCustomer] = useState(false)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [verifyOtp, setVerifyOtp] = useState(false)
    const [otpResultMessage, setOtpResultMessage] = useState('')
    const bottomSheet = useRef()
    const ORIGIN = { latitude: 37.78825, longitude: -122.4324 };
    const DESTINATION = { latitude: 37.7749, longitude: -122.4194 };
    const API_KEY = 'AIzaSyA47XXKuNkOS0Z6m0RdyKsRgw9ydRr35ww';
    const [region, setRegion] = useState({
        latitude: 2.046934,
        longitude: 45.318161,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const handleDeliveryToShopTrip = () => {
        setDeliveryToShopTripStarted(true)
        setDriveToShop(false)
        setShowGoAnimation(true)

        bottomSheet.current.close()
    };
    const handleDeliveryToCustomerTrip = () => {
        setDestination({
            latitude: Number(route?.params?.order?.drop_location?.latitude),
            longitude: Number(route?.params?.order?.drop_location?.longitude)
        })
        setDeliveryToCustomerTripStarted(true)
        setDriveToShop(false)
        setShowGoAnimation(true)
        bottomSheet.current.close()
    };

    if (showGoAnimation) {
        setTimeout(() => {
            setShowGoAnimation(false)
        }, 3000)
    }


    const pickProductModalHandler = () => {
        setDeliveryToCustomerTripStarted(true)
        setDeliveryToShopTripStarted(false)
        setOtpModal(false)
    }
    const driveToCustomer = () => {
        setDestination({
            latitude: Number(route?.params?.order?.drop_location?.latitude),
            longitude: Number(route?.params?.order?.drop_location?.longitude)
        })
    }
    useEffect(() => {
        const getOrigin = async () => {
            const originCoordinate = JSON.parse(await AsyncStorage.getItem("current_location"))
            setOrigin({
                latitude: originCoordinate?.latitude,
                longitude: originCoordinate?.longitude,
            })
        }
        const getDestination = async () => {
            setDestination({
                latitude: Number(route?.params?.order?.shop_location?.latitude),
                longitude: Number(route?.params?.order?.shop_location?.longitude)
            })
            setPickupData(route?.params?.order?.shop_location)
            setDropData(route?.params?.order?.drop_location)
        }
        getOrigin()
        getDestination()
    }, [])

    const changeMapDirection = () => {
        setDestination({
            latitude: Number(route?.params?.order?.drop_location?.latitude),
            longitude: Number(route?.params?.order?.drop_location?.longitude)
        })
        setDeliveryToCustomerTripStarted(true)
        bottomSheet.current.close()
    }
    const deliveryToBuyerOTP = async () => {
        const deliveryData = new FormData()
        deliveryData.append('UOID', route?.params?.order?.order_details?.UOID)
        const { result } = await postData('agent/orders/sendotp', deliveryData, setError, setIsLoading)
        console.log(result)
        if (result?.data == 'OTP generated successfully') {
            setVerifyOtp(true)
            setOtpModal(false)
            setOtpResultMessage(result?.data)

        }
    }

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let locationn = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: locationn.coords.latitude,
                longitude: locationn.coords.longitude
            });
        })();
    }, []);
    console.log('====================================');
    console.log(route?.params?.order?.order_details?.UOID);
    console.log('====================================');

    return (
        <View style={styles.container}>
            <StatusBarComponent barStyle={'default'} />
            <MapView
                style={styles.map}
                region={region}
                key={"AIzaSyA47XXKuNkOS0Z6m0RdyKsRgw9ydRr35ww"}
                provider={PROVIDER_GOOGLE}
            >
                <Marker coordinate={location} pinColor="blue" />
                <Marker coordinate={destination} pinColor="red" />
                {
                    (route?.params?.order?.order_details?.status == 3 || route?.params?.order?.order_details?.status == 4) && (
                        <MapViewDirections
                            origin={location}
                            destination={destination}
                            apikey={API_KEY}
                            strokeWidth={3}
                            strokeColor="hotpink"
                        />
                    )
                }
            </MapView>
            <View>
                {/* {
                    route?.params?.order?.order_details?.status == 3 && (
                        <FAB
                            style={styles.fab}
                            icon="car"
                            onPress={() => bottomSheet.current.open()}
                        />
                    )
                } */}
                {/* {
                    route?.params?.order?.order_details?.status == 3 && (
                        <FAB
                            style={[styles.fab_2]}
                            icon="cart"
                            onPress={() => setOtpModal(true)}
                        />
                    )
                } */}
                {
                    (route?.params?.order?.order_details?.status == 4) && (
                        <FAB
                            style={[styles.fab_3]}
                            icon="car"
                            onPress={() => bottomSheet.current.open()}

                        />
                    )
                }
                <FAB
                    style={[styles.fab]}
                    icon="phone"
                    onPress={() => Linking.openURL(`tel:${route?.params?.order?.shop_location?.phone_number}`)}
                />
            </View>
            <RBSheet
                closeOnDragDown={true}
                dragFromTopOnly
                minClosingHeight={100}
                // animationType='slide'
                ref={bottomSheet}
                closeOnPressMask
                height={500}
                openDuration={250}
                customStyles={{
                    container: {
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 0,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        backgroundColor: colors.primary2
                    },
                    draggableIcon: { top: 10, width: 50 }
                }}
            >
                <View style={styles.miniBottomSheetWrapper}>
                    <View style={styles.estimatedWrapper}>
                        <Text style={styles.estimatedTime}>10:45</Text>
                        <Text style={styles.estimatedText}>Estimated arrival</Text>
                    </View>
                    <View style={styles.locationAndTimeWrapper}>
                        <View style={styles.iconAndContentWrapper}>
                            <View style={styles.iconWrapper}>
                                <Ionicons name='time-outline' size={30} />
                            </View>
                            <View style={styles.contentElementsWrapper}>
                                <Text style={styles.contentTitle}>Your delivery time</Text>
                                <Text style={styles.contentValue}>50 min</Text>
                            </View>
                        </View>
                        <View style={styles.lineSeparator} />
                        <View style={styles.iconAndContentWrapper}>
                            <View style={styles.iconWrapper}>
                                <Entypo name='location-pin' size={30} />
                            </View>
                            <View style={styles.contentElementsWrapper}>
                                <Text style={styles.contentTitle}>Your delivery address</Text>
                                <Text style={styles.contentValue}>{route?.params?.order?.drop_location?.landmark}</Text>
                            </View>
                        </View>
                    </View>
                    <LinearGradient colors={["#baf5f0", "#a2c0f5", "#ebf29d"]} style={styles.infoWrapper} >
                        <View style={styles.customerInfoWrapper}>
                            <View style={styles.nameImageWrapper}>
                                <View style={styles.imageWrapper}>
                                    <Image source={{ uri: `https://api.elabis.app/storage/images/shops/${pickupData?.photos}` }} style={styles.image} />
                                </View>
                                <Text style={styles.name}>{route?.params?.order?.buyer_details[0]?.name}</Text>
                            </View>
                            <Pressable style={styles.phoneWrapper} onPress={() => Linking.openURL(`tel:${route?.params?.order?.buyer_details?.phone_number}`)}>
                                <Entypo name='phone' size={30} />
                            </Pressable>
                        </View>
                        <View style={styles.buttonsHolder}>
                            {
                                deliveryToCustomerTripStarted ? (
                                    <CustomButton color={colors.tertiary} label={"Send OTP"} onPress={() => {
                                        setOtpModal(true)
                                        bottomSheet.current.close()
                                    }} navigation={navigation} bottomSheet={bottomSheet} setShowGoAnimation={setShowGoAnimation} />
                                )
                                    : <CustomButton color={colors.statusCard} onPress={changeMapDirection} navigation={navigation} data={{}} label={"Start"} bottomSheet={bottomSheet} setShowGoAnimation={setShowGoAnimation} />
                            }
                        </View>
                    </LinearGradient>

                </View>
            </RBSheet>
            {
                showGoAnimation && (
                    <GoAnimation />
                )
            }
            <SendOTPModal setDeliveryToShopTripStarted={setDeliveryToShopTripStarted} onPress={deliveryToBuyerOTP} otpModal={otpModal} setOtpModal={setOtpModal} />
            <VerifyOtpModal otpResultMessage={otpResultMessage} navigation={navigation} orderId={route?.params?.order?.order_details?.UOID} verifyOtp={verifyOtp} setVerifyOtp={setVerifyOtp} />
        </View>
    );
};



export default ShopLocation;