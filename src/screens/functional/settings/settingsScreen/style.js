import { StyleSheet } from "react-native";
import { colors, borderColor, fontSizes, fontWeights, HeightDimension, WidthDimension } from "../../../../constants/globalStyles";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    miniContainer: {
        flex: 1,
        padding: 10
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 50,
        resizeMode: "contain"
    },
    imageNameWrapper: {
        alignItems: "center",
        paddingVertical: "2%"
    },
    imageWrapper: {
        width: 100,
        height: 100,
        borderRadius: 50,
        padding: "1%",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.secondary
    },
    name: {
        fontSize: fontSizes.secondary,
        fontWeight: fontWeights.secondary,
        color: colors.tertiary
    },
    sectionTitleWrapper: {
        backgroundColor: "#EDF0EF",
        paddingVertical: "2%",
        borderRadius: 5,
        paddingHorizontal: "2%"
    },
    sectionActionTitle: {
        fontSize: fontSizes.primary,
        fontWeight: fontWeights.secondary,
        color: colors.tertiary,
        opacity: .6
    },
    actionButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    iconNameWrapper: {
        flexDirection: "row",
        alignItems: "center",
        // flex: .3,
        // paddingHorizontal: "3%",
        paddingVertical: "2%",
    },
    actionName: {
        fontSize: fontSizes.primary,
        fontWeight: fontWeights.secondary,
        color: colors.tertiary,
        marginLeft: 6
    },
    chevronIcon: {
        color: colors.tertiary,
        opacity: .6,
    },
    actionsGroupWrapper: {
        borderWidth: 1,
        borderColor: colors.gray,
        padding: "2%",
        borderRadius: 5,
        marginTop: "2%"
    },
    actionsWrapper: {
        paddingVertical: "1%"
    },
    logOutSectionWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: "4%",
        paddingVertical: "3%",
        padding: "2%",
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 5
    },
    logOutText: {
        marginLeft: 6
    },

    logOutModalText: {
        fontSize: 19,
        fontWeight: "500"
    },
    cancelText: {
        color: "green"
    },
    logOutTxt: {
        color: "red"
    },
    modalContainerStyle: {
        backgroundColor: 'red',
        // height: HeightDimension / 4,
        // width: WidthDimension / 1.2,
        // borderRadius: 10,
        // justifyContent: "space-around",
        // alignItems: "center", alignSelf: "center"
    },
    buttonsHolder: {
        flexDirection: "row",
        width: "90%",
        height: "30%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "10%",
        backgroundColor: "pink"
    },
})