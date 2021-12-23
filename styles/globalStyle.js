import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    container:  {
        padding:    40,
    },
    content:    {
        fontSize:   20,
        fontFamily: "Roboto-Thin",
        fontWeight: "bold",
    },
    icon:   {
        position:   "absolute",
        left:   20,
    },
    bodyText:   {
        backgroundColor:    "#d8e2dc",
        marginTop:  10,
        borderRadius:   10,
        padding:    5,
        fontFamily: "Roboto-Thin",
    },
    rattingCon: {
        backgroundColor:    "#d8e2dc",
        marginTop:  10,
        borderRadius:   10,
        padding:    5,
        flexDirection:  "row",
    },
    rattingText:    {
        fontFamily: "Roboto-Thin",
        fontWeight: "bold",
    },
    Card:   {
        borderRadius:   6,
        elevation:  5,
        backgroundColor:    "#ffe5d9",
        shadowOffset:   { width:    2, height:  2},
        shadowColor:    "#333",
        shadowOpacity:  0.3,
        shadowRadius:   2,
        marginHorizontal:   4,
        marginVertical: 6,
        padding:    10,
    },
    titleImage: {
        height: 80,
    },
    customHeaderContainer:  {
        alignContent:   "center",
        flexDirection:  "row",
    },
    customHeaderImage:  {
        height: 30,
        width:  30,
        marginRight:    10,
    },
    customHeaderText:   {
        fontSize:   23,
        fontFamily: "Roboto-Thin",
        fontWeight: "bold",
    },
    plusButtonContainer:    {
        justifyContent: "center",
        alignItems: "center",
        marginBottom:   20,
    },
    customButton:   {
        width:  100,
        paddingHorizontal:  10,
        paddingVertical:    10,
        backgroundColor:    "red",
        borderRadius:   10,
        alignSelf:  "center",
    },
    ButtonText: {
        fontSize:   18,
        color:  "#fff",
        textAlign:  "center",
    },
    formContainer:  {
        paddingHorizontal:  50,

    },
    textInput:  {
        borderStyle:    "dashed",
        borderRadius:   10,
        borderWidth:    1,
        marginBottom:   10,
        padding:    10,
    },
    InputTitle: {
        fontSize:   18,
    }
})