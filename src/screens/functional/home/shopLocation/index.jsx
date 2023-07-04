import { View, Text, StatusBar, Platform, Button, TouchableOpacity, Image, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useRef, useState } from 'react'
import styles from './style'
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Circle } from 'react-native-maps';
import Header from '../../../../components/molecules/header';
import RBSheet from "react-native-raw-bottom-sheet";
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-paper';
import CustomButton from '../../../../components/atoms/button';
import { colors } from '../../../../constants/globalStyles';
import GoAnimation from '../../../../assets/animations/go';
import { useSelector, useDispatch } from 'react-redux'
import { setActiveTrip } from '../../../../redux/activeTrip';
import customerProfile from '../../../../assets/images/justin2.png'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { MotiView } from '@motify/components';
import { Easing } from 'react-native-reanimated';
import { StyleSheet } from 'react-native';

const ShopLocation = ({ navigation, route }) => {
    const [showGoAnimation, setShowGoAnimation] = useState(false)
    const order = useSelector(state => state.activeTrip.activeTrip)
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const orderData = order?.id ? order : route.params.data
    const { width, height } = new Dimensions.get("window")
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.02;
    const LONGTIUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;
    const [pin, setPin] = useState({
        latitude: Number(route.params?.order?.shop_location?.latitude),
        longitude: Number(route.params?.order?.shop_location?.longitude),
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGTIUDE_DELTA,
    })

    const bottomSheet = useRef()
    useEffect(() => {
        setShowGoAnimation(false)
    }, [])
    if (showGoAnimation) {
        setTimeout(() => {
            setShowGoAnimation(false)
        }, 3000)
    }

    const INITIAL_POSITION = {
        latitude: 2.046934,
        longitude: 45.318161,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGTIUDE_DELTA,
    }

    return (
        <SafeAreaView>
            <StatusBar barStyle={Platform.OS == 'android' ? 'dark-content' : 'light-content'} />
            <Header bgColor='transparent' profile={true} bellIcon={true} title={"Shop Location"} navigation={navigation} />
            <MotiView
                from={{ scale: .8, opacity: .5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: "timing",
                    duration: 1000,
                    easing: Easing.out(Easing.ease),
                    loop: true
                }}
                style={styles.startButtonWrapper}>
                <TouchableOpacity style={styles.startButton} onPress={() => {
                    bottomSheet.current.open()
                }}>
                    <Text style={styles.startButtonText}>Go</Text>
                </TouchableOpacity>
            </MotiView>
            <View>
                <MapView
                    onPress={(e) => {
                        setPin({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude,
                        });
                    }}
                    mapType='satellite' style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={pin} >
                    <Marker coordinate={pin}
                        pinColor='black'
                        draggable={true}
                        onDragStart={(e) => {
                            setPin({
                                latitude: e.nativeEvent.coordinate.latitude,
                                longitude: e.nativeEvent.coordinate.longitude
                            })
                        }}
                        onDragEnd={(e) => {
                            setPin({
                                latitude: e.nativeEvent.coordinate.latitude,
                                longitude: e.nativeEvent.coordinate.longitude
                            })
                        }}
                    >
                        <Callout>
                            <Text>Hello i'm here</Text>
                        </Callout>
                    </Marker>
                    <Circle style={{ backgroundColor: "blue", borderColor: 'pink', width: 100, height: 100 }} center={pin} radius={100} strokeWidth={3} strokeColor='red' fillColor={'rgba(230,238,255,0.5)'} />
                </MapView>
                <View style={{ width: "90%", borderWidth: 1, borderColor: colors.gray, position: "absolute", left: 20, top: 150, borderRadius: 10 }}>
                </View>
            </View>
            <View>
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
                                    <Text style={styles.contentValue}>Hodan, wadajir</Text>
                                </View>
                            </View>
                        </View>
                        <LinearGradient colors={["#baf5f0", "#a2c0f5", "#ebf29d"]} style={styles.infoWrapper} >
                            <View style={styles.customerInfoWrapper}>
                                <View style={styles.nameImageWrapper}>
                                    <View style={styles.imageWrapper}>
                                        <Image source={customerProfile} style={styles.image} />
                                    </View>
                                    <Text style={styles.name}>Zakariye Dahir Ali</Text>
                                </View>
                                <View style={styles.phoneWrapper}>
                                    <Entypo name='phone' size={30} />
                                </View>
                            </View>
                            <View style={styles.buttonsHolder}>
                                <CustomButton color={colors.tertiary} label={"Contact"} navigation={navigation} bottomSheet={bottomSheet} setShowGoAnimation={setShowGoAnimation} />
                                <CustomButton color={colors.statusCard} navigation={navigation} data={orderData} label={"Start"} bottomSheet={bottomSheet} setShowGoAnimation={setShowGoAnimation} />

                            </View>

                        </LinearGradient>

                    </View>
                </RBSheet>


            </View>
            {
                showGoAnimation && (
                    <GoAnimation />
                )
            }
        </SafeAreaView >
    )
}

export default ShopLocation