import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../../screens/functional/home/homeScreen';
import HomeStack from '../../screens/functional/home';
import DeliveryStack from '../../screens/functional/delivery';
import HistoryStack from '../../screens/functional/history';
import WalletStack from '../../screens/functional/wallet';
import SettingsStack from '../../screens/functional/settings';
import { colors } from '../../constants/globalStyles';
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"

            screenOptions={{
                tabBarActiveTintColor: '#16B9B9',
                headerShown: false,
                tabBarStyle: { backgroundColor: colors.primary, }
            }}
        >
            <Tab.Screen
                name="homeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="deliveryStack"
                component={DeliveryStack}
                options={{
                    tabBarLabel: 'Deliveries',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="shopping-cart" color={color} size={size} />
                    ),
                    tabBarBadge: 3,
                }}
            />
            <Tab.Screen
                name="historyStack"
                component={HistoryStack}
                options={{
                    tabBarLabel: 'History',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="clock" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="walletStack"
                component={WalletStack}
                options={{
                    tabBarLabel: 'Wallet',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="wallet" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="settingsStack"
                component={SettingsStack}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="settings" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}