import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, } from "react-native";
import ButtonDetails from "./ButtonDetails";

function Games(props) {
    const teste = props.id
    return (
        <View style={styles.container}>
            <Image style={styles.gamePhoto} source={{ uri: props.image }} />
            <Text style={styles.name}>
                {props.name}
            </Text>
            <View>
                <Text style={styles.price}>
                    R$: {props.price}
                </Text>
                <ButtonDetails />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    gamePhoto: {
        width: 80,
        height: 120
    },
    name: {
        color: "#000",
        fontSize: 18
    },
    containerList: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#BBB",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5
    },
    button: {
        backgroundColor: "#00f",
        height: 25,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 5
    },
    textPurchase: {
        color: "#FFF"
    }
})



export default Games