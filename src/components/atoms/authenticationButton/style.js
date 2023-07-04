import { StyleSheet } from "react-native";
import { colors } from "../../../constants/globalStyles";
export default StyleSheet.create({
    button: {
        backgroundColor: colors.logoColor,
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})