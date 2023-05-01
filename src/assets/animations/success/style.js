import { StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights } from "../../../constants/globalStyles";
export default StyleSheet.create({
    contentWrapper: {
        alignItems: "center"
    },
    successText: {
        fontSize: fontSizes.tertiary,
        fontWeight: fontWeights.secondary,
        color: colors.tertiary,
        marginTop: "2%"

    },
    animationWrapper: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray,
        elevation: 6,
        width: 350,
        height: 400,
        position: "absolute",
        top: 270,
        left: 35,
        alignItems: "center",
        zIndex: 10
    }
})