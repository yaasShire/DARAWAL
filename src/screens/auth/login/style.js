import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: '#EDEFF1',
        flex: 1,
        // padding: '10%'
        marginBottom: '3%'
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: "cover"
    },
    titlesHolder: {
        paddingVertical: '8%'
    },
    title1: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500"
    },
    title2: {
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center"
    },
    description: {
        textAlign: 'center',
        opacity: 0.8,
        fontSize: 15
    },
    imageHolder: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    fieldsHolder: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonHolder: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    forgetPasswordHolder: {
        alignItems: "flex-end",
        justifyContent: 'center',
        marginRight: '6%'
    },
    forgetPasswordText: {
        opacity: 0.4,
        fontSize: 16
    }
})