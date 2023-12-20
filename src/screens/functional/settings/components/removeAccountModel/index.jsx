import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './style'
const RemoveAccountModal = ({ showRemoveAccount = false, setShowRemoveAccount = () => { }, navigation, onPress = () => { } }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showRemoveAccount}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setShowRemoveAccount(!showRemoveAccount);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View>
                        <Text style={styles.logOutModalText}>Are you sure to remove your account ?</Text>
                    </View>
                    <View style={styles.buttonsHolder}>
                        <Button style={styles.cacenlButton} mode="outlined" onPress={() => {
                            setShowRemoveAccount(false)
                        }}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </Button>
                        <Button style={styles.logoutButton} mode="outlined" onPress={() => {
                            onPress()
                        }}>
                            <Text style={styles.logoutText}>Remove</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
};


export default RemoveAccountModal;