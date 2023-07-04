import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1
    },
    textHolder: {
        padding: '10%'
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: "center"
    },
    imageHolder: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'cover'
    },
    textInputHolder: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    buttonHolder: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    }
})