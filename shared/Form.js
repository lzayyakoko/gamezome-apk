import React, {useState} from "react";
import {View, Text, TextInput, Keyboard, Button} from "react-native";
import { globalStyle } from "../styles/globalStyle";
import CustomButton from "./CustomButton";

const Form=({addHandler})=>{
    const [ title, setTitle] = useState();
    const [ body, setBody ] = useState();
    const [ ratting, setRatting ] = useState();

    return(
        <View style={globalStyle.formContainer}>
            <Text style={globalStyle.InputTitle}>Title</Text>
            <TextInput style={globalStyle.textInput} placeholder="Enter Game Title" onChangeText={(value)=>setTitle(value)}/>

            <Text style={globalStyle.InputTitle}>Body</Text>
            <TextInput style={globalStyle.textInput} placeholder="Review Game" onChangeText={(value)=>setBody(value)}/>

            <Text style={globalStyle.InputTitle}>Rating</Text>
            <TextInput style={globalStyle.textInput} keyboardType="number-pad" placeholder="1-5" onChangeText={(value)=>setRatting(value)}/>

            <Button title="Submit" onPress={()=>addHandler(title,body,ratting)}/>
        </View>
    )
}
export default Form;