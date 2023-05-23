import { StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights } from "../../../../constants/globalStyles";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    miniWrapper: {
        padding: 10,

    },
    subtitleWrapper: {
        alignItems: "center",
        paddingVertical: "4%"
    },
    subtitleText: {
        fontSize: fontSizes.tertiary,
        fontWeight: fontWeights.secondary,
        color: colors.tertiary,
    },
    image: {
        width: 270,
        height: 270,
        resizeMode: "cover"
    },
    imageWrapper: {
        alignItems: "center",
        paddingVertical: "2%",
    },
    inputsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "5%"
    },
    textHolder: {
        marginTop: "10%"
    },
    otpText: {
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center"
    },
    otpFieldsHolder: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '10%',
        paddingHorizontal: "3%"

    },

    borderStyleBase: {
        width: 30,
        height: 45
    },
    inputView: {
        backgroundColor: colors.primary,
        width: 70,
        height: 70,
        borderRadius: 10,
        borderWidth: .5,
        borderColor: colors.gray
    },
    input: {
        height: "100%",
        borderRadius: 10,
        width: "100%",
        fontSize: fontSizes.secondary,
        textAlign: 'center',
        color: colors.tertiary
    },
    buttonWrapper: {
        alignItems: "center",
        paddingVertical: "5%",

    },
    resendOTPWrapper: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: "2%",
        marginTop: "3%"
    },
    questionText: {
        fontSize: fontSizes.primary,
        color: colors.gray,

    },
    resendText: {
        fontSize: fontSizes.primary,
        color: "red",
        fontWeight: fontWeights.primary
    },
    messageWrapper: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: "3%"
    },
    messageText: {
        fontSize: fontSizes.primary,
        color: colors.gray,
        fontWeight: fontWeights.primary
    },
    number: {
        fontSize: fontSizes.secondary,
        color: "blue",
        fontWeight: fontWeights.primary
    }

})