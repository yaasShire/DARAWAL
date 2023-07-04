import { StyleSheet } from "react-native";
import { colors, borderColor, fontSizes, fontWeights, screenPadding } from "../../../../constants/globalStyles";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    ordersWrapper: {
        rowGap: 15,
        alignItems: "center",
        paddingVertical: screenPadding
    },
    segmentsWrapper: {

        padding: screenPadding
    }
})