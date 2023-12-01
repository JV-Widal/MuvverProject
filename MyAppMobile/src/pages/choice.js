import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/Logo.svg';
import van from '../../assets/van.svg';
import entrega from '../../assets/entrega.svg';

import Transport from "./transport";
import volumeSize from "./volumeSize";

export default function choice() {

    const navigation = useNavigation(); 

    const objeto = () => {
        navigation.navigate('volumeSize');
    };

    const pessoa = () => {
        navigation.navigate('transport'); // Navegue para a tela chamada 'Feed'
    };

    return (
        <View style={style.container}>
            <View style={{ width: '100%', height: 30, padding: 10 }}>
                <Image style={style.logoM} source={Logo} />
            </View>
            <Text style={{ paddingTop: 30}}>Facilitando seus <b>envios</b></Text>
            <Text style={{ color: 'gray', paddingTop: 15 }}>Entregue ou envie </Text>

            <View style={{ justifyContent: 'space-around', height: 300 }}>
                <TouchableOpacity style={style.card} onPress={objeto}>
                    <View style={{ display: 'flex', paddingLeft: 10 }}>
                        <Text style={{ color: 'white', fontSize: 16, paddingBottom:10 }}>Remetente</Text>
                        <Text style={{ color: 'white' }}>Para onde quer enviar seu objeto?</Text>
                    </View>
                    <View style={{paddingRight: 20}}>
                        <Image style={style.imgs} source={entrega} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.card} onPress={pessoa}>
                    <View style={{ display: 'flex', paddingLeft: 10 }}>
                        <Text style={{ color: 'white', fontSize: 16, paddingBottom:10  }}>Viajante</Text>
                        <Text style={{ color: 'white' }}>Vai viajar para onde?</Text>
                    </View>
                    <View style={{paddingRight: 20}}>
                        <Image style={style.imgs} source={van} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        alignItems: 'center',

        height: '100%',
    },
    logoM: {
        width: 80,
        height: 15,
    },
    card: {
        width: 340,
        height: 120,
        backgroundColor: "#353740",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'


    },
    imgs: {
        width: 50,
        height: 50,

    },
});