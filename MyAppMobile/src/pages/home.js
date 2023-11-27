import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Feed from "./feed";
import LogoMuvver from "../../assets/logo_muvver.svg";


export default function home() {

    const navigation = useNavigation(); // Inicialize o hook de navegação

    const proxTela = () => {
        navigation.navigate('feed'); // Navegue para a tela chamada 'Feed'
    };

    return (
        <View style={style.container}>
            <View style={{ border: 5, borderColor: 'white', width: 500, height: 1000, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{width: 135,height: 25, margin:0, padding: 0,border:0 }}>
                    <Image style={style.logo} source={LogoMuvver} />
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={proxTela}>
                    <Text style={{ color: 'white', marginBottom:50 }}>Proxima Tela</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#020202",
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: "100%",
        height: "100%"
    }
});