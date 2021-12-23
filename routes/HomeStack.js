import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo } from '@expo/vector-icons';
import Home from "../screens/Home";
import Review from "../screens/Review";
import About from "../screens/About";
import { globalStyle } from "../styles/globalStyle";
import { Image } from "react-native";
import CustomHeader from "../shared/CustomHeader";

const StackContainer = createStackNavigator();
const DrawContainer = createDrawerNavigator();

function HomeScreen({navigation}){ 
    return(
        <StackContainer.Navigator>
                <StackContainer.Screen name="Home" component={Home}
                options={
                    {title: <CustomHeader title="GameZone"/>,
                    headerBackground:   ()=>{
                        return <Image style={globalStyle.titleImage} source={require('../assets/game_bg.png')}/>
                    },
                    headerTitleAlign:   "center",
                    headerLeft: ()=>{
                       return <Entypo name="menu" size={30} color="black" style={globalStyle.icon} onPress={()=>navigation.openDrawer()} />
                    }
                }
                }
                />
                <StackContainer.Screen name="Review" component={Review}
                options={
                    {title: <CustomHeader title="Review"/>,
                    headerBackground:   ()=>{
                        return <Image style={globalStyle.titleImage} source={require('../assets/game_bg.png')}/>
                    },
                    headerTitleAlign:   "center"
                }
                }
                />
        </StackContainer.Navigator> 
    )
}

function AboutScreen({navigation}){
    return(
        <StackContainer.Navigator>
                <StackContainer.Screen name="About" component={About}
                 options={
                    {title: <CustomHeader title="About"/>,
                    headerBackground:   ()=>{
                        return <Image style={globalStyle.titleImage} source={require('../assets/game_bg.png')}/>
                    },
                    headerStyle:    {
                        backgroundColor:    "#fec89a",
                    },
                    headerTitleAlign:   "center",
                    headerLeft: ()=>{
                       return <Entypo name="menu" size={30} color="black" style={globalStyle.icon} onPress={()=>navigation.openDrawer()} />
                    }
                }
            }
                />
        </StackContainer.Navigator> 
    )
}

export default function HomeStack(){
    return(
        <NavigationContainer>
            <DrawContainer.Navigator>
                <DrawContainer.Screen name="Home" component={HomeScreen}/>
                <DrawContainer.Screen name="About" component={AboutScreen}/>
            </DrawContainer.Navigator>
        </NavigationContainer>
    )
}