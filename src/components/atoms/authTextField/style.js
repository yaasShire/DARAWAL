import { StyleSheet } from "react-native";
export default StyleSheet.create({
    inputWrapper: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        height: 55,
        marginBottom: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10
    },
    input: {
        borderRadius: 8,
        fontSize: 16,
        height: 55,
        flex: 1,
    },
    errorHolder: {
        marginVertical: 3
    },
    errorText: {
        color: "red"
    }
})