import { Dimensions, Platform, StyleSheet } from "react-native";
import { colors, borderColor, fontSizes, fontWeights } from "../../../../constants/globalStyles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    topHeader: {
        backgroundColor: colors.statusCard,
        height: height / 4.3,

        padding: 10
    },
    searchDateCard: {
        backgroundColor: "#fff",
        height: height / 6,
        borderRadius: 5,
        borderWidth: .5,
        borderColor: colors.gray,
        top: -50,
        width: "95%",
        left: 10,
        // position: "absolute",
        elevation: 5,
        padding: "3%",
        alignItems: "center",
        justifyContent: "space-around"
    },
    searchText: {
        fontSize: fontSizes.secondary,
        color: colors.tertiary,
        fontWeight: fontWeights.secondary,
        textAlign: "center"
    },
    dateValuesWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#C1D8E0",
        borderRadius: 5,
        width: "90%",
        height: 50,
        alignItems: "center",
        // width: "50%"
        paddingHorizontal: "5%"
    },
    dateItem: {
        width: "30%",
        height: 40,
        marginHorizontal: "1%",
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: 1,
        borderRightColor: colors.gray
    },
    buttonWrapper: {
        width: "30%",
        height: 40,
        marginHorizontal: "1%",
        justifyContent: "center",
        alignItems: "center",

    },
    dateItemText: {
        fontSize: fontSizes.secondary,
        color: colors.tertiary,
        fontWeight: fontWeights.secondary
    },
    datePickerWrapper: {
        marginTop: "5%"
    },
    historyCardsWrapper: {
        top: 80,
        height: height,
        backgroundColor: "blue"

    }
})