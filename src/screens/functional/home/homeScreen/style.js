import { Dimensions, StyleSheet } from "react-native";
import { colors, borderColor, fontWeights, fontSizes, screenPadding } from '../../../../constants/globalStyles'
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        // padding: screenPadding,

    },
    onlineWrapper: {
        alignItems: "center",
        paddingVertical: "1%",
        marginTop: "2%",
        justifyContent: "space-between",
        height: 80,
    },
    headerWrapper: {

    },
    onlineText: {
        fontSize: fontSizes.tertiary,
        fontWeight: fontWeights.secondary
    },
    map: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: -10
    },
    mapWrapper: {
        borderWidth: 1,
        borderColor: colors.statusCard,
        borderRadius: 10,
        padding: "1%"
    },
    statusCardWrapper: {
        flex: 1,
        justifyContent: "flex-end",
        marginTop: "60%",
        padding: screenPadding
    }

})