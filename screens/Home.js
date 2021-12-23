import React, {useState} from "react";
import {View, Text, FlatList, TouchableOpacity, Modal, Button} from 'react-native';
import Card from "../shared/Card";
import { globalStyle } from "../styles/globalStyle";
import { AntDesign } from '@expo/vector-icons';
import Form from "../shared/Form";

export default function Home({navigation}){
    const [data, setData] = useState([
        {title: "go to school", body:   `createStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator. Both of them are React components used for configuring the navigator. The Navigator should contain Screen elements as its children to define the configuration for routes.
            NavigationContainer is a component which manages our navigation tree and contains the navigation state. This component must wrap all navigators structure. Usually, we'd render this component at the root of our app, which is usually the component exported from App.js.`
        , key:  1, ratting: 3,
        },
        {title: "playing game", body:   `createStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator. Both of them are React components used for configuring the navigator. The Navigator should contain Screen elements as its children to define the configuration for routes.
            NavigationContainer is a component which manages our navigation tree and contains the navigation state. This component must wrap all navigators structure. Usually, we'd render this component at the root of our app, which is usually the component exported from App.js.`
        , key:  2, ratting: 5,
        }        
    ]);
    const [ modalShow, setModalShow] = useState(false);
    
    const addHandler=(title,body,ratting)=>{

        const newText =(data)=>{
            return [
              {title: title, body: body, key: Math.random(), ratting:  parseInt(ratting)},
              ...data
            ]
          }
          setData(newText);
          setModalShow(false);
    }
    return(
        <View style={globalStyle.container}>

            <Modal visible={modalShow} animationType="slide">
                <View style={globalStyle.plusButtonContainer}>
                    <AntDesign name="closecircle" size={40} color="red"  onPress={()=> setModalShow(false)}/>
                </View>

                <Form addHandler={addHandler}/>
            </Modal>

            <View style={globalStyle.plusButtonContainer}>
                <AntDesign name="pluscircle" size={40} color="red" onPress={()=> setModalShow(true)} />
            </View>

            <View>
                <FlatList
                data={data}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate("Review", item)}>
                            <Card>
                                <Text style={globalStyle.content}>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>
                    )
                }}
                />
            </View>            
        </View>
    )
}