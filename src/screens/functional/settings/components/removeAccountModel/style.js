import { StyleSheet } from "react-native";
import { colors } from "../../../../../constants/globalStyles";

export default StyleSheet.create({
    buttonsHolder: {
        flexDirection: "row",
        width: "97%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "10%"
    },
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
        justifyContent: "space-around",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 200,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    logOutModalText: {
        fontSize: 19,
        fontWeight: "500"
    }

});