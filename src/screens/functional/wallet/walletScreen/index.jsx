import { View, Text, StatusBar, Platform, SafeAreaView, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Header from '../../../../components/molecules/header'
import { colors } from '../../../../constants/globalStyles'
import Feather from 'react-native-vector-icons/Feather';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Divider } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker';
const Wallet = () => {
    const tempDate = new Date()
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false);
    const [text, setText] = useState(tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear())
    const onChange = (event, selectDate) => {
        const currentDate = selectDate || date;
        setShow(Platform.OS == 'ios');
        setDate(currentDate)
        let tempDate = new Date(currentDate)
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        setText(fDate)
    }
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode)

    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'android' ? 'light-content' : 'dark-content'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.topHeader}>
                    <View>
                        <Header profile={true} title={"Wallet"} color={colors.statusCard} textColor={"#FFF"} />
                    </View>
                    <View style={styles.balanceCard}>
                        <Text style={styles.balanceText}>Balance</Text>
                        <Text style={styles.balanceAmmount}>$670</Text>
                    </View>
                </View>
                <View style={styles.middelContent}>
                    {
                        show && (
                            <DateTimePicker
                                testID='dateTimePicker'
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display={Platform.OS == 'ios' ? 'spinner' : 'default '}
                                onChange={onChange}
                            />
                        )
                    }
                    <View style={styles.graphCardWrapper}>
                        <View style={styles.graphCard}>
                            <View style={styles.dateInfoWrapper}>
                                <View style={styles.dateTextInfoWrapper}>
                                    <Text style={styles.dateTextMonth}>{text}</Text>
                                </View>
                                <View style={styles.datePickerWrapper}>
                                    <TouchableOpacity style={styles.pickerButton} onPress={() => setShow(prev => !prev)}>
                                        <Text style={styles.pickDateText}>Pick Date</Text>
                                        <Feather name='chevron-down' size={20} color={colors.tertiary} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.chartWrapper}>
                                <BarChart
                                    data={{
                                        labels: ["January", "February", "March", "April", "May", "June"],
                                        datasets: [
                                            {
                                                data: [
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100
                                                ]
                                            }
                                        ]
                                    }}
                                    width={Dimensions.get("window").width - 30} // from react-native
                                    height={250}
                                    yAxisLabel="$"
                                    yAxisSuffix="k"
                                    yAxisInterval={1} // optional, defaults to 1
                                    chartConfig={{
                                        backgroundColor: "#e26a00",
                                        backgroundGradientFrom: "#03968c",
                                        backgroundGradientTo: "#0e7d99",
                                        decimalPlaces: 2, // optional, defaults to 2dp
                                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        style: {
                                            borderRadius: 16
                                        },
                                        propsForDots: {
                                            r: "6",
                                            strokeWidth: "2",
                                            stroke: "#ffa726"
                                        }
                                    }}
                                    bezier
                                    style={{
                                        marginVertical: 8,
                                        borderRadius: 16
                                    }}
                                />
                            </View>
                            <Divider style={{ width: "100%" }} />
                            <View style={styles.courierInfoWrapper}>
                                <View style={styles.infoWrapper}>
                                    <Text style={styles.infoTitle}>Trips</Text>
                                    <Text style={styles.infoValue}>350</Text>
                                </View>
                                <View style={styles.infoWrapper}>
                                    <Text style={styles.infoTitle}>Time online</Text>
                                    <Text style={styles.infoValue}>180</Text>
                                </View>
                                <View style={styles.infoWrapper}>
                                    <Text style={styles.infoTitle}>Total distance</Text>
                                    <Text style={styles.infoValue}>68km</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.earningCard}>
                        <View style={styles.singInfoWrapper}>
                            <Text style={styles.earningTitle}>Total Earnings</Text>
                            <Text style={styles.earningValue}>$25k</Text>
                        </View>
                        <Divider />
                        <View style={styles.singInfoWrapper}>
                            <Text style={styles.earningTitle}>Today trip earning</Text>
                            <Text style={styles.earningValue}>$300</Text>
                        </View>
                    </View>
                    <View style={styles.earningCard}>
                        <View style={styles.withdrawalTextWrapper}>
                            <Text style={styles.withdrawalText}>Withdrawal history</Text>
                        </View>
                        <Divider />
                        <View style={styles.earningDetails}>
                            <View style={styles.singInfoWrapper}>
                                <Text style={styles.earningTitle}>Total Earnings</Text>
                                <Text style={styles.earningValue}>$25k</Text>
                            </View>
                            <Divider />
                            <View style={styles.singInfoWrapper}>
                                <Text style={styles.earningTitle}>Today trip earning</Text>
                                <Text style={styles.earningValue}>$300</Text>
                            </View>
                        </View>

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Wallet