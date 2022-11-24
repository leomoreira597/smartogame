import React from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Games from "../components/Games";
import Header from "../components/Header";
import axios from "axios";

function Store (props){
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
                Alert.alert("Erro","Algo não deu certo")
            })
    }
      
        return(
            <View style={styles.container}>
                <Header />
                <FlatList data={gameState}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Games key={item.id} {...item} />}/>
            </View>
        );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})

export default Store