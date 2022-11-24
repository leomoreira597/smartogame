import React from "react";
import { StyleSheet, View, FlatList, Alert, Image, Text, TouchableOpacity } from "react-native";
import Games from "../components/Games";
import axios from "axios";
import ButtonDetails from "../components/ButtonDetails";

function Store(props) {
    const [gameState, setGameState] = React.useState([])

    React.useEffect(() => {
        loadGames()
    });


    loadGames = () => {
        axios.get(`http://10.0.2.2:8080/product`)
            .then(res => {
                setGameState(res.data)
            })
            .catch(e => {
                Alert.alert("Erro", "Algo não deu certo")
            })
    }

    function purchase(game) {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate("DetailsGame", game)}>
                <View style={styles.containerButton}>
                    <Text style={styles.textButton}>Comprar</Text>
                </View>
            </TouchableOpacity>
        );
    }

    function getGameList({ item: game }) {
        return (
            <View style={styles.containerList}>
                <Image style={styles.gamePhoto} source={{ uri: game.image }} />
                <Text style={styles.name}>
                    {game.name}
                </Text>
                <View>
                    <Text style={styles.price}>
                        R$: {game.price}
                    </Text>
                    {purchase(game)}
                </View>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <FlatList data={gameState}
                keyExtractor={item => `${item.id}`}
                renderItem={getGameList} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    gamePhoto: {
        width: 100,
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
    },
    containerButton: {
        height: 50,
        width: 100,
        backgroundColor: "#00F",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    textButton: {
        color: "#FFF"
    }
})

export default Store