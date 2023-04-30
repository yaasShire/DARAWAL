import { Platform, StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights } from "../../../../constants/globalStyles";
export default StyleSheet.create({
    container: {
        backgroundColor: "red",
        flex: 1,
        padding: 10
    },

    map: {
        width: "100%",
        height: "100%",

    },
    bottomSheetContent: {
        width: "100%",
        height: "100%",
        padding: 20,
        paddingTop: 50

    },
    locationIconAndAddresWrapper: {
        flexDirection: 'row',
        padding: "2%",
        height: 76,
        alignItems: "center"

        // width: "100%"
    },
    locationIconWrapper: {
        backgroundColor: colors.gray,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        width: 35,
        height: 35,
        marginRight: "3%"
    },
    locationIconDistanceWrapper: {
        alignItems: "center"
    },
    distance: {
        fontWeight: fontWeights.secondary,
        fontSize: fontSizes.primary,
        color: colors.tertiary
    },
    dropPointText: {
        fontSize: fontSizes.secondary,
        color: colors.tertiary,
        fontWeight: fontWeights.secondary
    },
    addressText: {
        fontSize: fontSizes.primary,
        color: colors.tertiary,
        fontWeight: fontWeights.primary
    },
    timeAndPackagesWrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    divider: {
        height: 60,
        width: 1,
        backgroundColor: colors.gray,

    },
    infoTitle: {
        // fontWeight: 60,
        fontSize: fontSizes.primary,
        color: colors.tertiary,
    },
    infoValue: {
        fontSize: fontSizes.secondary,
        color: colors.tertiary,
        fontWeight: fontWeights.secondary
    },
    infoWrapper: {
        alignItems: "center",
        justifyContent: "center"
    },
    buttonsHolder: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "5%"
    },
    startButtonWrapper: {
        position: "absolute",
        top: Platform.OS == 'ios' ? 170 : 80,
        right: 10,
        // backgroundColor: colors.primary,
        borderWidth: 3,
        borderColor: "blue",
        zIndex: 10,
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    startButton: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },
    startButtonText: {
        color: colors.primary,
        fontWeight: fontWeights.primary,
        fontSize: fontSizes.tertiary
    }

})