import { StyleSheet } from "react-native";
import { HeightDimension, WidthDimension, colors, fontSizes, fontWeights } from "../../../constants/globalStyles";
export default StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: colors.primary,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 200,
        justifyContent: "space-around",
        width: "90%",

    },
    successText: {
        fontSize: fontSizes.tertiary,
        fontWeight: fontWeights.secondary,
        color: colors.tertiary,
        marginTop: "2%"

    },
    lottie: {
        width: 90,
        height: 90
    }
})