import { Dimensions, StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights } from "../../../constants/globalStyles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: width / 1.138,
        height: height / 2.5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.gray,
        padding: "2%"
    },
    image: {
        width: 50,
        height: 50
    },
    imageWrapper: {
        borderWidth: 2,
        borderColor: "pink",
        width: 60,
        height: 60,
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
        color: colors.gray,
        fontWeight: fontWeights.primary
    },
    middleContentWrapper: {
        height: "63%",
        paddingVertical: "2%",
        // marginTop: "1%",
        flexDirection: "row",
        alignItems: "center",
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
        // backgroundColor: "pink",
        height: "85%"
    },
    pickAndDropText: {
        fontSize: fontSizes.primary,
        color: colors.gray
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
        backgroundColor: colors.gray,
        width: 1,
        marginHorizontal: 10
    },
    infoTitle: {
        fontSize: fontSizes.primary,
        color: colors.gray,
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
        marginBottom: "1.5%"
    },
    buttonsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "1%"
    },
    phoneWrapper: {
        backgroundColor: colors.statusCard,
        borderWidth: 1,
        borderColor: colors.gray,
        paddingHorizontal: "10%",
        paddingVertical: "7%",
        borderRadius: 5
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
        backgroundColor: colors.statusCard,
        width: 300,
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
    }
})