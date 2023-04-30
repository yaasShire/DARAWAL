import { Dimensions, StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights } from "../../../constants/globalStyles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: height / 8,
        borderWidth: .5,
        borderColor: colors.gray,
        width: "100%",
        padding: 10,
        borderRadius: 5,
        elevation: 5
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: "4%"
    },
    upperContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    imageAddressWrapper: {
        flexDirection: "row",
        alignItems: "center",
        flex: .8
    },
    shopName: {
        fontSize: fontSizes.secondary,
        fontWeight: fontWeights.secondary,
        color: colors.tertiary
    },
    shopLocation: {
        fontSize: fontSizes.primary,
        fontWeight: fontWeights.primary,
        color: colors.tertiary,
        opacity: .5
    },
    feeText: {
        fontSize: fontSizes.primary,
        fontWeight: fontWeights.primary,
        color: colors.tertiary,
        opacity: .5
    },
    feeAmmount: {
        fontSize: fontSizes.secondary,
        fontWeight: fontWeights.secondary,
        color: colors.tertiary,
    },
    feeWrapper: {
        alignItems: "center",
        justifyContent: "center"
    }
})