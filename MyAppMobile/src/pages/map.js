import { View, Text, TouchableOpacity, Image, StyleSheet, useState } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
// import MapboxGL from "@react-native-mapbox-gl/maps";


import TravelPrice from './travelPrice';


// MapboxGL.setAccessToken("pk.eyJ1Ijoid2lkYWw0NCIsImEiOiJjbHBuYmw0bjcwNDBqMmpxdDJ2dXVscjFjIn0.LZL05c9G_-vVH_BYC_qDAA");

export default function map() {

    const navigation = useNavigation();

    const paraPreco = () => {
        navigation.navigate('travelPrice')
    };

    const voltaWay = () => {
        navigation.navigate('way')
    };

    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <View>
                    <Text style={{ color: 'gray', textAlign: 'center' }}>Ser um muvver</Text>
                </View>
                <View>
                    <Text style={{ textAlign: "left", color: 'white' }}>Qual o trajeto da sua viagem?</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around", alignContent: 'flex-end' }}>
                    <TouchableOpacity onPress={voltaWay}>
                        <Text style={{ color: 'white' }}>Rotas </Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'white' }}>Mapa </Text>

                </View>
            </View>
            <View style={style.centerArea}>

                <View style={{ flex: 1, height: "100%", width: "100%" }}>

                </View>

                <TouchableOpacity style={style.button} onPress={paraPreco}>
                    <Text style={{ color: 'white' }}>Avançar</Text>
                </TouchableOpacity>

            </View>
        </View>

    )
}


const style = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    centerArea: {
        justifyContent: 'space-around',
        width: 350,
        height: 600,

    },
    topBar: {
        backgroundColor: "#222222",
        width: 375,
        height: 138,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    button: {
        width: 350,
        height: 50,
        borderRadius: 3,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cityCard: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        padding: 8,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    plus: {
        width: 24,
        height: 24,
    }
});