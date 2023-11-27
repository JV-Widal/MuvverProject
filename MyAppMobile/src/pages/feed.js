import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import transport from "./transport";

import Info from "../../assets/info.svg";
import Config from "../../assets/config.svg";

export default function feed() {

    const navigation = useNavigation(); // Inicialize o hook de navegação

    const paraTransporte = () => {
        navigation.navigate('transport'); // Navegue para a tela chamada 'Feed'
    };

    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <View style={style.header}>
                    <Text style={{ color: 'white', backgroundColor: 'blue', borderRadius: 3, width: 32, height: 32 }}>Foto</Text>
                    <Text style={{ color: 'white' }}> Feed </Text>
                    <Image style={{ width: 24, height: 24 }} source={Info} />
                    <Image style={{ width: 24, height: 24 }} source={Config} />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around", }}>
                    <Text style={{ color: 'white' }}>Viagens </Text>
                    <Text style={{ color: 'white' }}>Objetos </Text>
                </View>
            </View>
            <View style={style.centerArea}>

                <View>
                    <View>
                        <Text>Data</Text>
                        <Text>Localização</Text>
                    </View>
                    <View>
                        <Text>Mínimo</Text>
                        <Text>R$</Text>
                    </View>
                    <View>
                        <Text>Foto</Text>
                        <View>
                            <View>
                                <Text>Nome</Text>
                                <Text>Nota</Text>
                            </View>
                            <View>
                                <Text>Entregas</Text>
                                <Text>Transporte</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>

            <TouchableOpacity style={style.button} onPress={paraTransporte}>
                <Text style={{ color: 'white' }}>Vai viajar ou quer enviar ? </Text>
            </TouchableOpacity>

            <View style={style.bottonBar}>

            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 375,
        height: 850,
    },
    topBar: {
        backgroundColor: "#222222",
        width: 375,
        height: 138,
        display: 'flex',
        flexDirection: 'col'
    },
    centerArea: {
        //width: 105,
        //height: 345,
    },
    bottonBar: {

    },
    button: {
        width: 200,
        height: 50,
        borderRadius: 3,
        backgroundColor: 'green',
    },
    header: {
        display: "flex",
        flexDirection: "row",
    }

});