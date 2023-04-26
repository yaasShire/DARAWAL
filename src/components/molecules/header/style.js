import { Dimensions, StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights } from "../../../constants/globalStyles";
const { width, height } = new Dimensions.get('window')
export default StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        color: colors.primary,
        fontSize: fontSizes.tertiary,
        fontWeight: fontWeights.secondary
    },
    badge: {
        position: 'absolute',
        zIndex: 10,
        bottom: 20
    },
    title: {
        color: colors.tertiary,
        fontSize: fontSizes.secondary
    }
})