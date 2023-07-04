import { Platform, StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights, screenPadding } from "../../../../constants/globalStyles";
export default StyleSheet.create({
    container: {
        backgroundColor: "red",
        flex: 1,
        padding: 10
    },

    map: {
        width: "100%",
        height: "100%",
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0

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
        alignItems: "center",
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
        alignItems: "center",
        justifyContent: "center",
        marginRight: "2%",
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
        justifyContent: "space-between"
    },
    buttonsHolder: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "15%",
        paddingVertical: "5%"
    },
    startButtonWrapper: {
        position: "absolute",
        top: Platform.OS == 'ios' ? 170 : 80,
        right: 10,
        // backgroundColor: colors.primary,
        borderWidth: 3,
        borderColor: colors.logoColor,
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
        backgroundColor: colors.logoColor,
        justifyContent: "center",
        alignItems: "center"
    },
    startButtonText: {
        color: colors.primary,
        fontWeight: fontWeights.primary,
        fontSize: fontSizes.secondary
    },
    miniBottomSheetWrapper: {
        width: "100%",
        height: "100%"
    },
    estimatedWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: screenPadding
    },
    estimatedTime: {
        fontSize: fontSizes.tertiary,
        fontWeight: fontWeights.tertiary,
        color: colors.tertiary
    },
    estimatedText: {
        fontSize: fontSizes.primary,
        fontWeight: fontWeights.primary,
        color: colors.tertiary,
        opacity: .5
    },
    iconWrapper: {
        backgroundColor: colors.primary,
        width: 40,
        height: 40,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginRight: "3%"
    },
    iconAndContentWrapper: {
        flexDirection: "row",
        marginVertical: "3%"
    },
    contentTitle: {
        fontSize: fontSizes.primary,
        fontWeight: fontWeights.primary,
        color: colors.tertiary,
        opacity: .8
    },
    contentValue: {
        fontSize: fontSizes.secondary,
        fontWeight: fontWeights.secondary,
        color: colors.tertiary,
    },
    locationAndTimeWrapper: {
        paddingHorizontal: screenPadding,
        alignItems: 'flex-start',
        justifyContent: "center"
    },
    image: {
        width: 55,
        height: 55,
        resizeMode: "cover",
        borderRadius: 7
    },
    imageWrapper: {
        backgroundColor: "#caede8",
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: .3,
        borderColor: colors.gray,
        borderRadius: 10,
        marginRight: 8
    },
    infoWrapper: {
        width: "100%",
        padding: screenPadding,
        height: "100%",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35
    },
    customerInfoWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    nameImageWrapper: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    },
    phoneWrapper: {
        backgroundColor: colors.primary,
        width: 45,
        height: 45,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        elevation: 4
    },
    name: {
        fontSize: fontSizes.primary,
        fontWeight: fontWeights.primary
    },
    lineSeparator: {
        height: 40,
        width: 2,
        borderStyle: 'dashed',
        borderWidth: 1,
        marginLeft: "5%"
    },
    fabWrapper: {
        margin: 16,
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.logoColor
    },

})