import { Dimensions, StyleSheet } from "react-native";
import { colors, borderColor, fontWeights, fontSizes } from '../../../../constants/globalStyles'
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        padding: 10

    },
    onlineWrapper: {
        alignItems: "center",
        paddingVertical: "1%",
        marginTop: "2%",
        justifyContent: "space-between",
        height: 80,
        // position: 'absolute',

    },
    headerWrapper: {

    },
    onlineText: {
        fontSize: fontSizes.tertiary,
        fontWeight: fontWeights.secondary
    },
    map: {
        width: "100%",
        height: "100%",

    },
    mapWrapper: {
        borderWidth: 3,
        borderColor: colors.statusCard,
        borderRadius: 10,
        padding: "1%"
    },
    statusCardWrapper: {
        position: "absolute",
        bottom: 30,
        left: 24,
    }

})