import React from "react";
import { View, Text, Image, TouchableOpacity, Alert, FlatList, StyleSheet } from "react-native";
import axios from "axios";


export default function DescriptionGame(props) {
    const [locals, setLocals] = React.useState([])
    const id = props.route.params.id

    React.useEffect(() => {
        getLocals()
    })

    function purchaseGame() {
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

    function getLocals() {
        axios.get(`http://10.0.2.2:8080/local/${id}`)
            .then(res => {
                setLocals(res.data)
            })
            .catch(e => {
                Alert.alert("Erro!!", "Não foi possivel achar os locais")
            })
    }

    function renderItensLocals({ item: local }) {
        return (
            <Text>{local.name}</Text>
        );
    }


    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image style={styles.imageGame} source={{ uri: props.route.params.image }} />
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.title}>
                    {props.route.params.name}
                </Text>
                <Text>
                    {props.route.params.description}
                </Text>
                <Text style={styles.price}>
                    R$: {props.route.params.price}
                </Text>
                <Text style={styles.locals}>
                    Locais onde comprar:
                </Text>
                <FlatList data={locals}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItensLocals} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={purchaseGame}>
                    <View style={styles.buttonPurchase}>
                        <Text style={styles.textButton}>
                            Comprar
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    containerImage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 5

    },
    imageGame: {
        height: 220,
        width: 160
    },
    descriptionContainer: {
        flex: 1,
        paddingLeft: 8,
        paddingTop: 10
    },
    title: {
        fontSize: 30,
        color: "#000",
        fontWeight: "600",
        marginBottom: 5
    },
    price:{
        fontSize: 20,
        color: "#00B500",
        fontWeight: "400",
        marginTop: 10    
    },
    locals:{
        fontSize: 15,
        color:"#000"
    },
    buttonContainer:{
        flex: 1,
        alignItems:"center",
        justifyContent: "center"
    },
    buttonPurchase:{
        backgroundColor: "#00B500",
        height: 50,
        width: 100,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    textButton:{
        color: "#FFF",
        fontSize: 18,
        
    }
})