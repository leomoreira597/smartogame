import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { RNCamera } from "react-native-camera";
import QRCodeScanner from 'react-native-qrcode-scanner'

export default function QRCode(props) {
    const [discount, setDiscount] = React.useState("")

    const handleLink = () => {
        Linking.openURL(discount).catch(() => {
            console.log("Houve um erro")
        })
    }

    return (
        <QRCodeScanner
            onRead={({ data }) => setDiscount(data)}
            flashMode={RNCamera.Constants.FlashMode.off}
            topContent={
                <View>
                    <Text>
                        Desconto: {discount}
                    </Text>
                </View>
            }
            bottomContent={
                <TouchableOpacity onPress={handleLink} style={{ padding: 12, backgroundColor: "#0277BD", marginTop: 20 }}>
                    <Text style={{ backgroundColor: "#FFF" }}>
                        Ir para link
                    </Text>
                </TouchableOpacity>
            }
        />
    );
}