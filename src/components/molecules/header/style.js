import { Dimensions, StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights, screenPadding } from "../../../constants/globalStyles";
const { width, height } = new Dimensions.get('window')
export default StyleSheet.create({
    header: (bgColor) => (
        {
            backgroundColor: bgColor,
            height: 60,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: screenPadding
        }
    ),
    titleWrapper: {
        flex: 13,
        alignItems: "center",

    },
    title: (textColor) => ({
        fontWeight: "500",
        color: textColor,
        fontSize: 25
    }),
    badge: {
        position: 'absolute',
        zIndex: 10,
        bottom: 20
    }
})