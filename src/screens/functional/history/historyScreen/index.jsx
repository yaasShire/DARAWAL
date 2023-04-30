import { View, Text, StatusBar, Platform, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import styles from './style'
import Header from '../../../../components/molecules/header'
import { colors } from '../../../../constants/globalStyles'
import Feather from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import HistoryCard from '../../../../components/molecules/historyCard'
import { historyOrders } from '../../../../data'
import { FlatList } from 'react-native-gesture-handler'
const History = () => {
    const tempDate = new Date()
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false);
    const [text, setText] = useState(tempDate)
    const onChange = (event, selectDate) => {
        const currentDate = selectDate || date;
        setShow(Platform.OS == 'ios');
        setDate(currentDate)
        let tempDate = new Date(currentDate)
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        setText(tempDate)
    }
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode)
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'android' ? 'light-content' : 'dark-content'} />
            <View style={styles.topHeader}>
                <Header profile={true} title={"History"} color={colors.statusCard} textColor={colors.primary} />

            </View>
            <View style={styles.searchDateCard}>
                <Text style={styles.searchText}>Search by date</Text>
                <View style={styles.dateValuesWrapper}>
                    <View style={styles.dateItem}>
                        <Text style={styles.dateItemText}>{text.getDate()}</Text>
                    </View>
                    <View style={styles.dateItem}>
                        <Text style={styles.dateItemText}>{text.getMonth()}</Text>
                    </View>
                    <View style={styles.dateItem}>
                        <Text style={styles.dateItemText}>{text.getFullYear()}</Text>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity onPress={() => setShow(prev => !prev)}>
                            <Feather name='chevron-down' size={25} />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            {
                show && (
                    <View style={styles.datePickerWrapper}>
                        <DateTimePicker
                            testID='dateTimePicker'
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display={Platform.OS == 'ios' ? 'spinner' : 'default '}
                            onChange={onChange}
                        />
                    </View>
                )
            }
            {/* <ScrollView contentContainerStyle={{ rowGap: 10, padding: 10, alignItems: "center" }} showsVerticalScrollIndicator={false} >
                {

                }
         
            </ScrollView> */}
            <FlatList
                contentContainerStyle={{ rowGap: 10, padding: 10, }}
                data={historyOrders}
                renderItem={({ item }) => (
                    <HistoryCard data={item} />

                )}
            />

        </SafeAreaView>
    )
}

export default History