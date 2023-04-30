import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
import { colors, borderColor, fontSizes, fontWeights } from "../../../../constants/globalStyles";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    topHeader: {
        backgroundColor: colors.statusCard,
        height: height / 3.5,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        padding: 10
    },
    balanceCard: {
        backgroundColor: colors.primary,
        height: "45%",
        borderRadius: 4,
        padding: 15
    },
    balanceText: {
        fontWeight: fontWeights.secondary,
        fontSize: fontSizes.primary,
        color: colors.tertiary
    },
    balanceAmmount: {
        fontWeight: fontWeights.tertiary,
        fontSize: fontSizes.tertiary,
        color: colors.tertiary
    },
    graphCardWrapper: {
        alignItems: "center",
    },
    middelContent: {
        padding: 10,
    },
    graphCard: {
        backgroundColor: colors.primary,
        height: height / 2,
        paddingVertical: "3%",
        paddingHorizontal: "3%",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.gray,
        marginTop: "4%",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 3
    },
    dateInfoWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingVertical: "2%"
    },
    datePickerWrapper: {
        alignSelf: "flex-end",
        width: 130,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,


    },
    pickerButton: {
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: colors.primary,
        width: "100%",
        height: "100%",
        borderWidth: .5,
        borderColor: colors.gray,
        flexDirection: "row",
        paddingHorizontal: "4%"
    },
    pickerButtonText: {
        color: colors.tertiary,
        fontSize: fontSizes.secondary,
        fontWeight: fontWeights.secondary
    },
    dateTextInfoWrapper: {
        flexDirection: "row",
        width: "30%",
        justifyContent: "center",
        borderWidth: .5,
        borderColor: colors.gray,
        borderRadius: 5

    },
    dateTextMonth: {
        fontSize: fontSizes.secondary,
        fontWeight: fontWeights.secondary,
        color: colors.tertiary,
        opacity: .7

    },
    dateTextDayAndYear: {
        fontSize: fontSizes.secondary,
        fontWeight: fontWeights.primary,
        color: colors.tertiary,
        opacity: .7

    },
    pickDateText: {
        fontSize: fontSizes.secondary,
        fontWeight: fontWeights.secondary,
        color: colors.tertiary,
        opacity: .8
    },
    chartWrapper: {
        marginBottom: "2%"
    },
    courierInfoWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    infoWrapper: {
        justifyContent: "center",
        alignItems: "center"
    },
    infoTitle: {
        fontSize: fontSizes.primary,
        fontWeight: fontWeights.primary,
        color: colors.tertiary,


    },
    infoValue: {
        fontSize: fontSizes.secondary,
        fontWeight: fontWeights.secondary,
        color: colors.tertiary,
    },
    earningCard: {
        backgroundColor: colors.primary,
        borderWidth: .5,
        borderColor: colors.gray,
        marginTop: "4%",
        borderRadius: 5,
        elevation: 5,
        paddingHorizontal: "3%",

    },

    singInfoWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingHorizontal: "3%",
        paddingVertical: "3%"
        // backgroundColor: "pink",
    },
    earningTitle: {
        fontSize: fontSizes.primary,
        fontWeight: fontWeights.primary,
        color: colors.tertiary,
        opacity: 1
    },
    earningValue: {
        fontSize: fontSizes.primary,
        fontWeight: fontWeights.tertiary,
        color: colors.tertiary,
        opacity: 1
    },
    withdrawalTextWrapper: {
        // backgroundColor: "pink",
        paddingVertical: "2%"
    },
    withdrawalText: {
        fontSize: fontSizes.secondary,
        fontWeight: fontWeights.tertiary
    }


})