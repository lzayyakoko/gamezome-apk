import React from "react";
import { View, Text, Image} from "react-native";
import { globalStyle } from "../styles/globalStyle";

export default function CustomHeader({title}){
    return(
        <View style={globalStyle.customHeaderContainer}>
            <Image style={globalStyle.customHeaderImage} source={require('../assets/heart_logo.png')}/>
            <Text style={globalStyle.customHeaderText}>{title}</Text>
        </View>
    );
}