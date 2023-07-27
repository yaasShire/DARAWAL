import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashAppScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('./assets/logo.png')}
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '80%',
        resizeMode: 'contain',
    },
});

export default SplashAppScreen;

