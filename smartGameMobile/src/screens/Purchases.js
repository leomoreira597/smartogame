import React from "react";
import { View, Text, FlatList } from 'react-native';
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
            <View>
                <Text>{purchase.product.name}</Text>
            </View>
        );
    }

    return (
        <View>
            {purch.length < 1 ?
                <View>
                    <Text>Opa!!!!!</Text>
                    <Text>Parece que não fez nenhuma compra</Text>
                </View>
                :
                <View >
                <FlatList data={purch}
                    keyExtractor={item => `${item.id}`}
                    renderItem={getPurchaseList} />
            </View>
            }
        </View>
    );
}