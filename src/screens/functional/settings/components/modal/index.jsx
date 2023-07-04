import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './style'
const LogOutModal = ({ visible = false, setVisible = () => { }, navigation, logout = () => { } }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setVisible(!visible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View>
                        <Text style={styles.logOutModalText}>Are you sure to log out ?</Text>
                    </View>
                    <View style={styles.buttonsHolder}>
                        <Button style={styles.cacenlButton} mode="outlined" onPress={() => {
                            setVisible(false)
                        }}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </Button>
                        <Button style={styles.logoutButton} mode="outlined" onPress={() => {
                            setVisible(false)
                            logout()
                            navigation.replace("authStack", { screen: "login" })
                        }}>
                            <Text style={styles.logoutText}>Log out</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
};


export default LogOutModal;