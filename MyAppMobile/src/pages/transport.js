import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from 'react-native';

const Transport = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { label: 'Carro', value: 'carro' },
        { label: 'Avião', value: 'aviao' },
        { label: 'Caminhão', value: 'caminhao' },
        { label: 'Van', value: 'van' },
        { label: 'Moto', value: 'moto' },
        { label: 'Bicicleta', value: 'bicicleta' },
        { label: 'Trem', value: 'trem' },
        { label: 'Ônibus', value: 'onibus' },
        // Adicione mais opções conforme necessário
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
                <View style={{ alignContent: 'left', width: 370, height: 74 }}>
                    <Text>Transporte</Text>
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

            </View>
            <View>
                <TouchableOpacity style={style.button}>
                    <Text style={{color: 'white'}}>Avançar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        justifyContent: 'space-between',
        height: 50,

    },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 375,
        height: 850,
        margin: 0,
        padding: 0,
        border: 0,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'black',
        height:151,
        width: 375,
    },
    button:{
        width: 350,
        height: 50,
        borderRadius: 3,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
});

export default Transport;
