import React from "react";
import { View, Text} from "react-native";
import { globalStyle } from "../styles/globalStyle";

export default function Card(props){
    return(
        <View style={globalStyle.Card}>
            <View>
                {props.children}
            </View>
        </View>
    );
}