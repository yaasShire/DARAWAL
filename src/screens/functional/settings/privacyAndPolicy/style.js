import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/globalStyles";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    miniContainer: {
        padding: 10,
        flex: 1
    },
    backIconHolder: {
        // paddingHorizontal: '3%'
    },
    privacyText: {
        fontWeight: '700',
        fontSize: 18,
        marginTop: 10,

    },
    contentContainer: {

    },
    privacyDesText: {
        opacity: 0.8,
        textAlign: "left"
    }
})