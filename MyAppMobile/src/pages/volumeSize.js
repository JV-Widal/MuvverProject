
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import envelope from '../../assets/envelope.svg';

import weight from "./weight";

export default function volumeSize() {

    const [selectedOption, setSelectedOption] = useState(null);

    const navigation = useNavigation(); 

    const paraPeso = () => {
        navigation.navigate('weight');
    };

    const options = [

        {
            label: (
                <>
                    <Image source={require('../../assets/envelope.svg')} style={{ width: 20, height: 20, marginRight: 10, color: '#22D57B' }} />
                    <Text>Envelope</Text>
                    
                </>
            ),
            value: 'envelope',
        },

        {
            label: (
                <>
                    <Image source={require('../../assets/livro.svg')} style={{ width: 20, height: 20, marginRight: 10, color: '#22D57B' }} />
                    <Text>Livro</Text>
                </>
            ),
            value: 'livro'
        },

        {
            label: (
                <>
                    <Image source={require('../../assets/caixa_pequena.svg')} style={{ width: 20, height: 20, marginRight: 10, color: '#22D57B' }} />
                    <Text>Caixa de sapato</Text>
                </>
            ),
            value: 'caixa_de_sapato'
        },

        {
            label: (
                <>
                    <Image source={require('../../assets/mala_de_mao.svg')} style={{ width: 20, height: 20, marginRight: 10, color: '#22D57B' }} />
                    <Text>Mochila</Text>
                </>
            ),
            value: 'mochila'
        },

        {
            label: (
                <>
                    <Image source={require('../../assets/mala_grande.svg')} style={{ width: 20, height: 20, marginRight: 10, color: '#22D57B' }} />
                    <Text>Mala Grande</Text>
                </>
            ),
            value: 'mala_grande'
        },

        {
            label: (
                <>
                    <Image source={require('../../assets/caixa.svg')} style={{ width: 20, height: 20, marginRight: 10, color: '#22D57B' }} />
                    <Text>Caixa Grande</Text>
                </>
            ),
            value: 'caixa_grande'
        },

        // Adicione mais opções conforme necessário
    ];

    const handleSelectOption = (value) => {
        setSelectedOption(value);
    };


    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <Text style={{ color: 'gray', height: 40 }}>Ser um Muvver</Text>
                <Text style={{ color: 'white', fontSize: 20 }}>O volume que você pode deslocar tem tamanho similar a que?</Text>
            </View>
            <View style={style.centerArea}>
                <View style={{ alignContent: 'left', width: 350 }}>
                    <Text style={{ fontWeight: 'bold' }}>Tamanhos</Text>
                </View>
                <View >
                    {options.map((option) => (
                        <TouchableOpacity
                            key={option.value}
                            onPress={() => handleSelectOption(option.value)}
                            style={style.optionContainer}
                        >
                            <Text style={{ color: 'black' }}>{option.label}</Text>

                            <View
                                style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 10,
                                    backgroundColor: selectedOption === option.value ? 'green' : 'gray',
                                    marginLeft: 10,
                                }}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
                {selectedOption && <Text>Opção selecionada: {selectedOption}</Text>}

                <View style={{}} >
                    <TouchableOpacity style={{ width: 350, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black' }}>Pular Etapa</Text>
                    </TouchableOpacity>
                </View>

                <View style={{}} >
                    <TouchableOpacity style={style.button} disabled={!selectedOption} onPress={paraPeso}>
                        <Text style={{ color: 'white' }}>Avançar</Text>
                    </TouchableOpacity>
                </View>

            </View>



        </View>

    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        alignItems: 'center',

    },
    button: {
        width: 350,
        height: 50,
        borderRadius: 3,
        backgroundColor: 'green',
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
        justifyContent: 'center',
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        justifyContent: 'space-between',
        height: 50,
        borderBottomColor: 'gray',
        borderBottom: 5,
        borderBottomWidth: 1

    },

});