import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { globalStyle } from "../styles/globalStyle";

const CustomButton=(props)=>{
    return(
        <TouchableOpacity>
            <View style={globalStyle.customButton}>
                <Text style={globalStyle.ButtonText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}
export default CustomButton;