import { StyleSheet } from "react-native";
import { colors, screenPadding } from "../../../../constants/globalStyles";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    orderCardsList: {
        rowGap: 15,
        alignItems: "center",
        padding: screenPadding,
        flex: 1
    }
})