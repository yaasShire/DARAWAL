import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: globalStyles.colors.miniPrimary,
        zIndex: 5,
        padding: 15
    },
    contentWrapper: {
        justifyContent: "space-around",
        alignItems: "center",
        width: "90%",
        height: 170,
    },
    text: {
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center"
    }
})