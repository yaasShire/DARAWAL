import { StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights } from "../../../constants/globalStyles";
export default StyleSheet.create({
    buttonWrapper: (color) => ({
        backgroundColor: color,
        width: "100%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    }),
    buttonText: {
        color: colors.primary,
        fontSize: fontSizes.primary,
        fontWeight: fontWeights.secondary
    }
})