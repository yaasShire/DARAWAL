import { StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights } from "../../../../../../constants/globalStyles";
export default StyleSheet.create({
    imageNameWrapper: {
        alignItems: "center",
        paddingVertical: "2%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    profileContent: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        resizeMode: "contain"
    },
    imageWrapper: {
        width: 80,
        height: 80,
        borderRadius: 40,
        padding: "1%",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.secondary
    },
    namePhoneNumberWrapper: {
        marginLeft: 6
    },
    name: {
        fontSize: fontSizes.primary,
        fontWeight: fontWeights.secondary,
        color: colors.tertiary,
    },
    phone_number: {
        color: colors.secondaryGray
    }
})