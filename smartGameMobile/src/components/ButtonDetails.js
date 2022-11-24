import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ButtonDetails(props) {
    return (
        <TouchableOpacity onPress={() => props.navigation.dispatch("DetailsGame")}>
            <View style={styles.container}>
                <Text style={styles.text}> Comprar </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 100,
        backgroundColor: "#00F",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    text: {
        color: "#FFF"
    }
})