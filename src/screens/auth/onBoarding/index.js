import { View, Text, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import welcome1 from '../../../assets/images/welcome1.png'
import welcome2 from '../../../assets/images/welcome2.png'
import welcome3 from '../../../assets/images/welcome3.png'
import styles from './style'
const OnBoardingIntro = ({ navigation }) => {
    return (
        <Onboarding
            onDone={() => navigation.navigate("bottomTabs")}
            onSkip={() => navigation.navigate("bottomTabs")}
            pages={[
                {
                    backgroundColor: '#81ccc6',
                    image: <Image source={welcome1} style={styles.image} />,
                    title: 'Darawal',
                    subtitle: 'Welcome to Darawal',
                },
                {
                    backgroundColor: '#327d77',
                    image: <Image source={welcome2} style={styles.image} />,
                    title: 'Darawal 2',
                    subtitle: 'Welcome to Darawal',
                },
                {
                    backgroundColor: '#046961',
                    image: <Image source={welcome3} style={styles.image} />,
                    title: 'Darawal 3',
                    subtitle: 'Welcome to Darawal',
                },
            ]}
        />
    )
}

export default OnBoardingIntro