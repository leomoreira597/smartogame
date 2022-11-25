import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Store from "./screens/Store";
import Purchase from "./screens/Purchases";
import { createStackNavigator } from '@react-navigation/stack';
import DescriptionGame from "./screens/DescriptionGame";
import Games from "./components/Games"
import ButtonDetails from "./components/ButtonDetails";
import { Button, Icon } from "@rneui/base";
import QRCodeScanner from "./components/QRCodeScanner"


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()


const FirstNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerStyle:{backgroundColor:"#F5523e"}, 
        headerTintColor: "#FFF"  }}>
            <Stack.Screen name="Store" component={Store} options={({ navigation }) =>{
                return {
                    title:"Smart Game", headerRight: () => (
                        <Button onPress={() => navigation.navigate('Purchase')} type="clear" icon={<Icon name="add" size={25} color="#FFF" />} />
                    )
                }
            } } />
            <Stack.Screen name="Purchase" component={Purchase} />   
            <Stack.Screen name="ButtonDetails" component={ButtonDetails} />
            <Stack.Screen name="DetailsGame" component={DescriptionGame} />
            <Stack.Screen name="Game" component={Games} />
            <Stack.Screen name="QRCode" component={QRCodeScanner} />
        </Stack.Navigator>
    );
}


export default function Navigator(props) {
    return (
        <NavigationContainer>
            <FirstNavigation />
        </NavigationContainer>
    );
}

