import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import aviaoDePapel from "../../assets/aviaoPapel.svg";



export default function travelCreated() {



    return (
        <View style={style.container}>

            <Image style={style.aviao} source={aviaoDePapel} />

            <Text style={{fontSize: 32}}>Viagem criada</Text>
            <Text>Vamos ver os volumes já disponíveis para a sua viagem.</Text>
            <Text>Ao prosseguir, você declara para efeitos legais,
                administrativos, jurídicos e demais aplicáveis, a veracidade de todas
                as informações prestadas antes, durante e após qualquer uma das etapas do app.
            </Text>

            <TouchableOpacity style={style.button}>
                <Text style={{ color: 'white' }}>Vizualizar volumes</Text>
            </TouchableOpacity>

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
    button: {
        width: 350,
        height: 50,
        borderRadius: 3,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',

    },
    aviao: {
        width: 128,
        height: 128,
    },
});