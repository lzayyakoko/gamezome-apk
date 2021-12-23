import React from "react";
import {View, Text} from 'react-native';
import Card from "../shared/Card";
import { globalStyle } from "../styles/globalStyle";

export default function About(){
    return(
        <View style={globalStyle.container}>
            <Card>
            <Text style={globalStyle.content}>Hello! I am L Zay Ya. I am React Native developer.</Text>
            </Card>
        </View>
    )
}