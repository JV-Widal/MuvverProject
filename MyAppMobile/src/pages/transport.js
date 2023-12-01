import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import way from "./way";

const Transport = () => {
    const [selectedOption, setSelectedOption] = useState(null);


    const navigation = useNavigation(); 

    const trajeto = () => {
        navigation.navigate('way');
    };


    const options = [
        {
            label: (
                <>
                    <Image source={require('../../assets/ic_car.svg')} style={style.icones} />
                    <Text >Carro</Text>
                </>
            ),
            value: 'Carro',
        },

        {
            label: (
                <>
                    <Image source={require('../../assets/ic_aviao.svg')} style={style.icones} />
                    <Text >Avião</Text>
                </>
            ),
            value: 'Avião',
        },

        {
            label: (
                <>
                    <Image source={require('../../assets/ic_caminhao.svg')} style={style.icones} />
                    <Text >Caminhão</Text>
                </>
            ),
            value: 'Caminhão',
        },

        {
            label: (
                <>
                    <Image source={require('../../assets/ic_van.svg')} style={style.icones} />
                    <Text >Van</Text>
                </>
            ),
            value: 'Van',
        },

        {
            label: (
                <>
                    <Image source={require('../../assets/ic_moto.svg')} style={style.icones} />
                    <Text >Moto</Text>
                </>
            ),
            value: 'Moto',
        },

        {
            label: (
                <>
                    <Image source={require('../../assets/ic_bike.svg')} style={style.icones} />
                    <Text >Bicicleta</Text>
                </>
            ),
            value: 'Bicicleta',
        },

        {
            label: (
                <>
                    <Image source={require('../../assets/ic_trem.svg')} style={style.icones} />
                    <Text >Trem</Text>
                    </>
            ),
            value: 'Trem',
        },
        {
            label: (
                <>
                    <Image source={require('../../assets/ic_bus.svg')} style={style.icones} />
                    <Text >Ônibus</Text>
                    </>
            ),
            value: 'Ônibus',
        },
        

    ];

    const handleSelectOption = (value) => {
        setSelectedOption(value);
    };

    return (
        //<View style={justifContent: 'spaceBetween'}}>

        <View style={style.container}>
            <View style={style.header}>
                <Text style={{ color: 'gray' }}>Ser um muvver</Text>
                <Text style={{ textAlign: "left", color: 'white' }}>Qual será o meio de transporte da sua viagem?</Text>
            </View>
            <View>
                <View style={{ alignContent: 'left', width: 370, height: 74, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10}}>Transporte</Text>
                </View>
                <View >
                    {options.map((option) => (
                        <TouchableOpacity
                            key={option.value}
                            onPress={() => handleSelectOption(option.value)}
                            style={style.optionContainer}
                        >
                            <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', alignItems: 'center', }}>
                                <Text style={{
                                    color: 'black',
                                    display: 'flex',
                                    flexWrap: 'nowrap',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',

                                }}>
                                    {option.label}</Text>

                                <View
                                    style={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: 10,
                                        backgroundColor: selectedOption === option.value ? 'green' : 'gray',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                {selectedOption && <Text>Opção selecionada: {selectedOption}</Text>}

            </View>
            <View>
                <TouchableOpacity style={style.button} onPress={trajeto}>
                    <Text style={{ color: 'white' }}>Avançar</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

const style = StyleSheet.create({
    optionContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: 10,
        margin: 5,

        height: 50,


    },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'black',
        height: 151,
        width: 375,
    },
    button: {
        width: 350,
        height: 50,
        borderRadius: 3,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10

    },
    icones: {
        width: 32,
        height: 32,
        marginRight: 10
    }
});

export default Transport;
