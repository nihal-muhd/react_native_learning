import { StyleSheet } from "react-native"

export const s = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding:20,
        borderRadius:5,
        gap:10
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:5
    },
    social: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:20
    },
    name:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:5
    },
    text:{
        flex:1
    }
})