import { Dimensions } from "react-native"

const colors = {
    primary: "#fff",
    primary2: "#e6f5f3",
    secondary: "#0CBA70",
    tertiary: "#000",
    gray: "#DCDCDC",
    secondaryGray: "#878584",
    statusCard: "#4FA19B",
    lagoon: "#4FA19B",
    completeButtonText: "#00FF66",
    logoColor: "#23baab",
}
const borderColor = {
    primary: "#0CBA70",
}
const fontSizes = {
    primary: 14,
    secondary: 18,
    tertiary: 35
}

const fontWeights = {
    primary: 500,
    secondary: 600,
    tertiary: 700
}
export const screenPadding = 10
export const WidthDimension = Dimensions.get("screen").width
export const HeightDimension = Dimensions.get("screen").height

export { colors, borderColor, fontSizes, fontWeights }