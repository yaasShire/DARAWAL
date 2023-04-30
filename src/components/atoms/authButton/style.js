import { StyleSheet } from "react-native";
export default StyleSheet.create({
    actionButton: (color) => ({
        width: '90%',
        backgroundColor: color,
        padding: "5%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginTop: '10%'
    }),
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ffffff'
    }
})