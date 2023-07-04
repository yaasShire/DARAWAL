import { StyleSheet } from "react-native";
import { colors } from "../../../../../constants/globalStyles";
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
        backgroundColor: colors.primary,
        zIndex: 5,
        padding: 15
    },
    contentWrapper: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",

    },
    text: {
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",

    },
    image: {
        height: 200,
        width: 250,
        resizeMode: "cover"
    },
    descriptionButtonWrapper: {
        flex: .3,
        justifyContent: "space-around",
        paddingVertical: "5%"
    }
})