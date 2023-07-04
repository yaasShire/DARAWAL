import { Dimensions, StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights, screenPadding } from "../../../constants/globalStyles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: width / 1.05,
        height: height / 3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.gray,
        padding: screenPadding
    },
    image: {
        width: 65,
        height: 65,
        resizeMode: "cover",
        borderRadius: 5
    },
    imageWrapper: {
        borderWidth: 1,
        borderColor: colors.logoColor,
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginRight: "3%"
    },
    upperContent: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    imageNameWrapper: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    },
    userName: {
        fontSize: fontSizes.secondary,
        color: colors.tertiary,
        fontWeight: fontWeights.tertiary,
        width: 150,
        textTransform: "capitalize"
    },
    feeAmmount: {
        fontSize: fontSizes.secondary,
        color: colors.tertiary,
        fontWeight: fontWeights.tertiary
    },
    feeAndDistanceWrapper: {
        alignItems: "center",
        justifyContent: "center"
    },
    distanceText: {
        fontSize: fontSizes.primary,
        color: colors.tertiary,
        fontWeight: fontWeights.secondary
    },
    middleContentWrapper: {
        height: "63%",
        paddingVertical: "2%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "yellow"
    },

    parentCirlce: (bgColor) => ({
        backgroundColor: bgColor,
        width: 22,
        height: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,

    }),
    childCirlce: {
        backgroundColor: "#fff",
        width: 12,
        height: 12,
        borderRadius: 50,
    },
    leftPickuPwrapper: {
        justifyContent: "space-between",
        height: "80%",
        alignItems: 'center'
    },
    divider: {
        height: 120,
        backgroundColor: colors.gray,
        width: 1
    },
    pickAndropPointWrapper: {
        justifyContent: "space-around",
        marginLeft: "3%",
        flex: 1,
        backgroundColor: "pink",
        height: "100%"
    },
    pickAndDropText: {
        fontSize: fontSizes.primary,
        color: colors.secondaryGray
    },
    address: {
        fontSize: fontSizes.primary,
        color: colors.tertiary,
        fontWeight: fontWeights.primary
    },
    packageInfoWrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "1.5%",
        alignItems: 'center'
    },
    time: {
        flexDirection: "row",
        alignItems: 'center',
    },
    package: {
        flexDirection: "row",
        alignItems: 'center'
    },
    timeAndPackages: {
        // backgroundColor: "pink",
        flex: 1,

    },
    infoDivider: {
        height: 40,
        backgroundColor: colors.secondaryGray,
        width: 1,
        marginHorizontal: 10
    },
    infoTitle: {
        fontSize: fontSizes.primary,
        color: colors.secondaryGray,
        fontWeight: fontWeights.primary
    },
    infoValue: {
        fontSize: fontSizes.primary,
        color: colors.tertiary,
        fontWeight: fontWeights.secondary
    },
    callIconAndText: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        flex: .4,
    },
    callText: {
        color: colors.tertiary,
        fontWeight: fontWeights.secondary,
        fontSize: fontSizes.primary
    },
    point: {
        // marginBottom: "1.5%"
        height: 50,
        justifyContent: "space-between"
    },
    buttonsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "1%",
    },
    phoneWrapper: {
        backgroundColor: colors.tertiary,
        borderWidth: 1,
        borderColor: colors.tertiary,
        padding: screenPadding,
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    button: (bgColor) => ({
        backgroundColor: bgColor,
        width: 130,
        height: 50,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: colors.secondary,
        justifyContent: "center",
        alignItems: "center"
    }),
    buttonText: (color) => ({
        color,
        fontSize: fontSizes.primary,
        fontWeight: fontWeights.primary
    }),
    completedOrderCard: {
        backgroundColor: colors.logoColor,
        width: "100%",
        height: 55,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "center"
    },
    completedText: {
        fontSize: fontSizes.secondary,
        color: colors.primary,
        marginRight: "4%"
    },
    completedCardWrapper: {
        flex: 1,
        alignItems: "center"
    }
})