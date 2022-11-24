import React from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import axios from "axios";


export default function DescriptionGame(props) {
    const id = props.route.params.id

    function purchaseGame(){
        axios.post(`http://10.0.2.2:8080/purchase`, {
            productId: id
        })
        .then(resp => {
            Alert.alert('Sucesso', 'Jogo comprado com sucesso')
        })
        .catch(e => {
            Alert.alert('Erro', 'Algo de errado não deu certo')
        })
    }


    return (
        <View>
            <View>
                <View>
                    <Image source={{ uri: props.route.params.image }} />
                </View>
                <Text>{props.route.params.name}</Text>
                <Text>{props.route.params.description}</Text>
                <Text>R$: {props.route.params.price}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={purchaseGame}>
                    <View>
                        <Text>
                            Comprar
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
}