import React from "react";
import {View, Text, Image} from 'react-native';
import Card from "../shared/Card";
import { globalStyle } from "../styles/globalStyle";

export default function Review({navigate , route}){
    const { title, body, ratting } = route.params;

    let resultRatting;
    if(ratting===1){
       resultRatting =  <Image source={require('../assets/rating-1.png')}/>
    } else if( ratting===2){
        resultRatting =  <Image source={require('../assets/rating-2.png')}/>
    } else if( ratting===3){
        resultRatting =  <Image source={require('../assets/rating-3.png')}/>
    } else if (ratting===4){
        resultRatting =  <Image source={require('../assets/rating-4.png')}/>
    } else{
        resultRatting =  <Image source={require('../assets/rating-5.png')}/>
    }

    return(
        <View style={globalStyle.container}>
            <Card>
                <Text style={globalStyle.content}>{title}</Text>
                <Text style={globalStyle.bodyText}>{body}</Text>

                <View style={globalStyle.rattingCon}>
                    <Text style={globalStyle.rattingText}>Ratting -</Text>
                    {resultRatting}
                </View>
            </Card>
        </View>
    )
}