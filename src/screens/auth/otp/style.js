import { StyleSheet } from "react-native";
import { colors, fontSizes } from "../../../constants/globalStyles";
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '10%',
        padding: 10
    },
    mainHolder: {
        flex: 1,
    },
    imageHolder: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    otpImage: {
        width: 200,
        height: 200,
        resizeMode: "cover"
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
    buttonHolder: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
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
    inputsWrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }

})