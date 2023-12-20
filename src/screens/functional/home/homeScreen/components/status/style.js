import { StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights } from "../../../../../../constants/globalStyles";
export default StyleSheet.create({
    onlineWrapper: {
        alignItems: "center",
        paddingVertical: "1%",
        marginTop: "2%",
        justifyContent: "space-between",
        height: 110,
    },
    onlineText: {
        fontSize: fontSizes.tertiary,
        fontWeight: fontWeights.tertiary,
        color: colors.tertiary
    },
})