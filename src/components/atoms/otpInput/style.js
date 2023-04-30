import { StyleSheet } from "react-native";
export default StyleSheet.create({
    inputHolder: {
        width: '20%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#c4c5cf'
    },
    input: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "700",
    },
    errorHolder: {
        backgroundColor: '#F0DBDB',
        paddingHorizontal: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '3%',
        borderRadius: 8,
        paddingVertical: '2%'
    },
    errorText: {
        fontSize: 14,
        color: 'red',
        fontWeight: "500",
    }
})