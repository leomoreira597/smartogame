import React from "react";
import DetailsGame from "../components/DetailsGame";
import { View, Text, TouchableOpacity } from "react-native";

export default function DescriptionGame(props){
    return(
        
        <View>
            <DetailsGame/>
            <TouchableOpacity onPress={() => props.navigation.navigate("StorePage")}>
                <View>
                    <Text>
                        jgfrigjh
                    </Text>
                </View>
            </TouchableOpacity>
        </View>

    );
}