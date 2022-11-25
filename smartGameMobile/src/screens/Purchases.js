import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from "axios";

export default function Purchase(props) {
    const [purch, setPurch] = React.useState([])

    React.useEffect(() =>{
        loadPurchases()
    })


    loadPurchases = () =>{
        axios.get(`http://10.0.2.2:8080/purchase`)
        .then(resp => {
            setPurch(resp.data)
        })
        .catch(e =>{

        })
    }

    function getPurchaseList({ item: purchase }){
        return(
            <View style={styles.container}>
                <Image style={styles.gamePhoto} source={{ uri: purchase.product.image }} />
                <Text style={styles.name}>{purchase.product.name}</Text>
                <Text style={styles.price}>R$: {purchase.product.price}</Text>
            </View>
        );
    }

    return (
        <React.Fragment>
            {purch.length < 1 ?
                <View style={styles.noContainer}>
                    <Text style={styles.badNotice}>Opa!!!!!</Text>
                    <Text style={styles.badNoticeDescription}>Parece que não fez nenhuma compra</Text>
                </View>
                :
                <View>
                <FlatList data={purch}
                    keyExtractor={item => `${item.id}`}
                    renderItem={getPurchaseList} />
            </View>
            }
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#BBB",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5
    },
    gamePhoto: {
        width: 100,
        height: 120
    },
    name: {
        color: "#000",
        fontSize: 18
    },
    price:{
        color: "#00B500",
        fontWeight: "500"
    },
    noContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center" 
    },
    badNotice:{
        color: "#000",
        fontSize: 70,
        fontWeight:"700"
    },
    badNoticeDescription:{
        fontSize: 40
    }
})