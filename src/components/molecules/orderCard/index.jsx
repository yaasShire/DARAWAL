import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import shopProfile from '../../../assets/images/justin.jpg'
import { Divider } from 'react-native-paper'
import { colors } from '../../../constants/globalStyles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
const OrderCard = ({ setVisible = () => { }, hideDialog = () => { }, setAlertTitle = () => { }, data, status = "", navigation = () => { } }) => {
    return (
        <View style={styles.container}>
            <View style={styles.upperContent}>
                <View style={styles.imageNameWrapper}>
                    <View style={styles.imageWrapper}>
                        <Image source={shopProfile} style={styles.image} />
                    </View>
                    <Text style={styles.userName} numberOfLines={2}>{data.shopName}</Text>
                </View>
                <View style={styles.feeAndDistanceWrapper}>
                    <Text style={styles.feeAmmount}>${data.fee}</Text>
                    <Text style={styles.distanceText}>{data.distance}km</Text>
                </View>
            </View>
            <View style={styles.middleContentWrapper}>
                {/* left pick up pointers */}
                <View style={styles.leftPickuPwrapper}>
                    <View style={styles.parentCirlce(colors.tertiary)}>
                        <View style={styles.childCirlce}></View>
                    </View>
                    <View style={styles.divider}></View>
                    <View style={styles.parentCirlce(colors.secondary)}>
                        <View style={styles.childCirlce}></View>
                    </View>
                </View>
                {/* left pick up pointers */}
                <View style={styles.pickAndropPointWrapper}>
                    {/* pick up point */}
                    <View>
                        <View style={styles.point}>
                            <Text style={styles.pickAndDropText}>Pick up point</Text>
                            <Text style={styles.address} numberOfLines={1}>{data.pickupPoint}</Text>
                        </View>
                        <Divider />
                    </View>
                    {/* pick up point ends here */}
                    {/* drop point */}
                    <View>
                        <View style={styles.point}>
                            <Text style={styles.pickAndDropText}>Drop point</Text>
                            <Text style={styles.address} numberOfLines={1}>{data.dropPoint}</Text>
                        </View>
                        <Divider />
                        <View style={styles.packageInfoWrapper}>
                            <View style={styles.timeAndPackages}>
                                <View style={styles.time}>
                                    <Text style={styles.infoTitle}>Estimated time:</Text>
                                    <Text style={styles.infoValue}>{data.estimatedTime}</Text>

                                </View>
                                <View style={styles.package}>
                                    <Text style={styles.infoTitle}>Packages: </Text>
                                    <Text style={styles.infoValue}>{data.packages}</Text>
                                </View>
                            </View>
                            <View style={styles.infoDivider} />
                            <View style={styles.callIconAndText}>
                                <Text style={styles.callText}>Call:</Text>
                                <FontAwesome name='phone' size={20} color={"green"} />
                            </View>
                        </View>
                    </View>
                    {/* drop point ends here */}
                </View>
            </View>
            <View style={styles.buttonsWrapper}>
                {
                    data.status == 'New' && (
                        <TouchableOpacity style={styles.button(colors.primary)} onPress={() => {
                            setVisible(true)
                            setAlertTitle("Reject")

                        }}>
                            <Text style={styles.buttonText(colors.tertiary)}>Reject</Text>
                        </TouchableOpacity>
                    )
                }
                {
                    data.status == 'New' && (
                        <TouchableOpacity style={styles.button(colors.secondary)} onPress={() => {
                            setVisible(true)
                            setAlertTitle("Accept")
                        }}>
                            <Text style={styles.buttonText(colors.primary)}>Accepted</Text>
                        </TouchableOpacity>
                    )
                }
                {
                    data.status == 'Completed' && (
                        <View style={styles.completedOrderCard}>
                            <Text style={styles.completedText}>Order delivered</Text>
                            <Feather name='check' size={30} color={colors.completeButtonText} />
                        </View>
                    )
                }
                {
                    data.status == "On the way" && (
                        <TouchableOpacity style={styles.button(colors.secondary)} onPress={() => {
                            navigation.navigate("shopLocation")
                        }}>
                            <Text style={styles.buttonText(colors.primary)}>{status == 'On the way' && 'Navigate Map'}</Text>
                        </TouchableOpacity>
                    )
                }
                {
                    data.status == "Pending" && (
                        <TouchableOpacity style={styles.button("red")} onPress={() => {
                            navigation.navigate('shopLocation')
                        }}>
                            <Text style={styles.buttonText(colors.primary)}>{status == 'Pending' && 'Shop location'}</Text>
                        </TouchableOpacity>
                    )
                }


            </View>
        </View>
    )
}

export default OrderCard