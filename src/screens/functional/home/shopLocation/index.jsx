import { View, Text, StatusBar, Platform, Button, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useRef, useState } from 'react'
import styles from './style'
import MapView from 'react-native-maps';
import Header from '../../../../components/molecules/header';
import RBSheet from "react-native-raw-bottom-sheet";
import Entypo from 'react-native-vector-icons/Entypo';
import { Divider } from 'react-native-paper';
import CustomButton from '../../../../components/atoms/button';
import { colors } from '../../../../constants/globalStyles';
import GoAnimation from '../../../../assets/animations/go';

const ShopLocation = ({ navigation, route }) => {
    const [showGoAnimation, setShowGoAnimation] = useState(false)
    const bottomSheet = useRef()
    useEffect(() => {
        setShowGoAnimation(false)
    }, [])
    if (showGoAnimation) {
        setTimeout(() => {
            setShowGoAnimation(false)
        }, 3000)
    }
    return (
        <SafeAreaView>
            <StatusBar barStyle={Platform.OS == 'android' ? 'dark-content' : 'light-content'} />
            <View>
                <Header profile={true} bellIcon={true} title={"Shop Location"} navigation={navigation} />
            </View>
            <View style={styles.startButtonWrapper}>
                <TouchableOpacity style={styles.startButton} onPress={() => {
                    bottomSheet.current.open()
                }}>
                    <Text style={styles.startButtonText}>Go</Text>
                </TouchableOpacity>
            </View>
            <View>
                <MapView style={styles.map} />
            </View>
            <View>
                <RBSheet
                    ref={bottomSheet}
                    height={300}
                    openDuration={250}
                    customStyles={{
                        container: {
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 0,
                            borderTopLeftRadius: 50,
                            borderTopRightRadius: 50,
                        }
                    }}
                >
                    <View style={styles.bottomSheetContent}>
                        <View style={styles.locationIconAndAddresWrapper}>
                            <View style={styles.locationIconDistanceWrapper}>
                                {/* location wrapper */}
                                <View style={styles.locationIconWrapper}>
                                    <Entypo name='location-pin' size={28} color={"red"} />
                                </View>
                                {/* location wrapper ends here */}
                                <View>
                                    <Text style={styles.distance}>6km</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.dropPointText}>Drop point</Text>
                                <Text style={styles.addressText}>{route.params.data.dropPoint}</Text>
                            </View>
                        </View>
                        <Divider />
                        <View style={styles.timeAndPackagesWrapper}>
                            <View style={styles.infoWrapper}>
                                <Text style={styles.infoTitle}>Esimated time</Text>
                                <Text style={styles.infoValue}>{route.params.data.estimatedTime}</Text>
                            </View>
                            <View style={styles.divider} />
                            <View style={styles.infoWrapper}>
                                <Text style={styles.infoTitle}>Packages</Text>
                                <Text style={styles.infoValue}>{route.params.data.packages}</Text>
                            </View>
                        </View>
                        <View style={styles.buttonsHolder}>
                            <CustomButton color={colors.tertiary} label={"Contact"} bottomSheet={bottomSheet} setShowGoAnimation={setShowGoAnimation} />
                            <CustomButton color={colors.secondary} label={"Start"} bottomSheet={bottomSheet} setShowGoAnimation={setShowGoAnimation} />
                        </View>
                    </View>

                </RBSheet>

            </View>
            {
                showGoAnimation && (
                    <GoAnimation />
                )
            }
        </SafeAreaView>
    )
}

export default ShopLocation