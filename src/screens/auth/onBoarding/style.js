import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    image: {
        width: width / 1.2,
        height: height / 2.5,
    }
})