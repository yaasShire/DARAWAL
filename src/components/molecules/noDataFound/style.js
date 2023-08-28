import { StyleSheet } from "react-native";
import { colors } from "../../../constants/globalStyles";
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    image: {
        resizeMode: "center",
        width: 200,
        height: 200
    },
    description: {
        fontSize: 15,
        // fontWeight: "500",
        color: colors.tertiary

    },
    refresh: {
        backgroundColor: colors.logoColor,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginTop: 20
    }
})