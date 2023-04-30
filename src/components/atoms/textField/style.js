import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainHolder: {
        justifyContent: 'center',
        alignItems: "center"
    },
    fieldHolder: {
        backgroundColor: "#ffffff",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowColor: "#000000",
        shadowOpacity: 0.7,
        elevation: 3,
        width: '90%',
        height: 65,
        borderRadius: 8,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row'
    },
    input: {
        width: '90%',
        borderRadius: 8,
        height: '100%',
        // backgroundColor: 'pink',
        paddingHorizontal: '5%',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },

    locationIconButton: {
        backgroundColor: '#F0DBDB',
        padding: '3%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        borderRadius: 5

    },
    errorHolder: {
        backgroundColor: '#F0DBDB',
        paddingHorizontal: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '3%',
        borderRadius: 8,
        paddingVertical: '2%'
    },
    errorText: {
        fontSize: 14,
        color: 'red',
        fontWeight: "500",
    }
})