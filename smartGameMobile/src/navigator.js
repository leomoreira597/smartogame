import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Store from "./screens/Store";
import Purchase from "./screens/Purchases";
import { createStackNavigator } from '@react-navigation/stack';
import DescriptionGame from "./screens/DescriptionGame";
import Games from "./components/Games"
import StepStack from "./components/StepStack";
import ButtonDetails from "./components/ButtonDetails";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()


const FirstNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StorePage" component={TabNavigator} />
            <Stack.Screen name="ButtonDetails" component={ButtonDetails} />
            <Stack.Screen name="DetailsGame" component={DescriptionGame} />
            <Stack.Screen name="Game" component={Games} />
        </Stack.Navigator>
    );
}

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Store"
            screenOptions={({ route }) => ({
                headerShown: false,
                activeTintColor: 'red',
                inactiveTintColor: 'blue',
                labelStyle: { fontSize: 30 }
            })}>

            <Tab.Screen name="Store" component={Store} />
            <Tab.Screen name="Conta" component={Purchase} />
        </Tab.Navigator>
    );
}

export default function Navigator(props) {
    return (
        <NavigationContainer>
            <FirstNavigation />
        </NavigationContainer>
    );
}

