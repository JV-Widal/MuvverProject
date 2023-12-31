import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import travelCreated from './travelCreated';

const TravelPrice = () => {

    const [sliderState, setSliderState] = React.useState(50);

    const navigation = useNavigation();

    const fim = () => {
        navigation.navigate('travelCreated'); // Navegue para a tela chamada 'Feed'
    };

    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <Text style={{ color: 'gray' }}>Ser um Muvver</Text>
                <Text style={{ color: 'white', fontSize: 16 }}>Definir preço minimo do deslocamento? </Text>
            </View>
            <View style={style.centerArea}>
                <View style={{ alignContent: 'left', width: 350 }}>
                    <Text style={{ fontWeight: 'bold' }}>Preço de entrega</Text>
                </View>

                <View style={{ alignItems: 'center', marginTop: 30 }}>
                    <Text>Valor sugerido</Text>
                    <Slider
                        style={{ width: 200, height: 40 }}
                        value={sliderState}
                        onValueChange={(value) => setSliderState(value)}
                        minimumValue={0}
                        maximumValue={100}
                        minimumTrackTintColor="#222222"
                        maximumTrackTintColor="#222222F"
                    />
                    <Text style={{ fontWeight: 'bold' }}>{sliderState.toFixed(0)} R$</Text>
                    <Text style={{ color: 'gray', marginTop: 30 }}>Clique no valor acima, para um preço mais específico.</Text>
                </View>
                <View style={{ position: 'absolute', bottom: 20 }} >
                    <TouchableOpacity style={style.button} onPress={fim}>
                        <Text style={{ color: 'white' }}>Avançar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>


    );
};


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    topBar: {
        backgroundColor: "#222222",
        width: 375,
        height: 138,
        display: 'flex',
        flexDirection: 'col',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    centerArea: {
        alignItems: 'center',
        height: 650,
    },
    button: {
        width: 350,
        height: 50,
        borderRadius: 3,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',

    }
});



export default TravelPrice;