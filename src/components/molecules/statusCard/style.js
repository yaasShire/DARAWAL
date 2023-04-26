import { Dimensions, StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights } from "../../../constants/globalStyles";
const { width, height } = new Dimensions.get('window')
export default StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: height / 3,
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 10,
        width: width / 1.14,
        padding: "3%",
        justifyContent: "space-between"
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 10
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
        alignItems: "center",
        justifyContent: "space-between"
    },
    imageNameWrapper: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    },
    userName: {
        fontSize: fontSizes.secondary,
        color: colors.tertiary,
        fontWeight: fontWeights.secondary
    },
    levelText: {
        fontSize: fontSizes.primary,
        color: colors.gray,
        fontWeight: fontWeights.primary
    },
    balanceText: {
        fontSize: fontSizes.primary,
        color: colors.gray,
        fontWeight: fontWeights.primary
    },
    balanceAmmount: {
        fontSize: fontSizes.secondary,
        color: colors.tertiary,
        fontWeight: fontWeights.tertiary
    },
    tripStatusCard: {
        backgroundColor: "#4FA19B",
        width: "100%",
        height: 180,
        borderRadius: 5,
        padding: "3%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    iconWrapper: {
        backgroundColor: "#fff",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        width: 38,
        height: 38
    },
    percentNumber: {
        fontSize: fontSizes.secondary,
        color: colors.primary,
        fontWeight: fontWeights.tertiary
    },
    columnText: {
        fontSize: fontSizes.primary,
        color: colors.primary,
        fontWeight: fontWeights.primary,
        opacity: .8
    },
    statusColumn: {
        alignItems: "center",
        height: "65%",
        justifyContent: 'space-around',
    },
    percentageStatusTextWrapper: {
        alignItems: "center",
        justifyContent: 'center'
    }
})