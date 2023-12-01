import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import aviaoDePapel from "../../assets/aviaoPapel.svg";



export default function travelCreated() {



    return (
        <View style={style.container}>
            <View style={{padding: 60, }}>
                <View style={style.espacamento}>
                    <Image style={style.aviao} source={aviaoDePapel} />
                </View>
                <View style={style.espacamento}>
                    <Text style={{ fontSize: 32 }}>Viagem criada</Text>
                </View >
                <View style={style.espacamento}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Vamos ver os volumes já disponíveis para a sua viagem.</Text>
                </View>
                <View style={{ width: 360, padding: 30,  }}>
                    <Text style={{textAlign: 'center'}}>Ao prosseguir, você declara para efeitos legais,
                        administrativos, jurídicos e demais aplicáveis, a veracidade de todas
                        as informações prestadas antes, durante e após qualquer uma das etapas do app.
                    </Text>
                </View>
            </View>
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
        justifyContent: 'center',
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
        padding: 20
    },
    espacamento: {
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
});