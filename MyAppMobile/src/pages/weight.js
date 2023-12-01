
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image,  } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import travelPrice from "./travelPrice";
import peso from '../../assets/peso.svg';
export default function weight() {

    const navigation = useNavigation();
    const paraPreco = () => {
        navigation.navigate('travelPrice'); 
    };

    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { label: 'Até 1 Kg', value: '1kg' },
        { label: 'Até 5 Kg', value: '5kg' },
        { label: 'Até 10 Kg', value: '10kg' },
        { label: 'Até 20 Kg', value: '20kg' },
        { label: 'Outro', value: '+kg' },

    ];

    const handleSelectOption = (value) => {
        setSelectedOption(value);
    };


    return (

        <View style={style.container}>
            <View style={style.topBar}>
                <Text style={{ color: 'gray', height: 40 }}>Ser um Muvver</Text>
                <View style={{width:'100%'}}>
                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'left', padding: 10}}>Qual o peso do volume ? </Text>
                </View>
            </View>
            <View style={style.centerArea}>
                <View style={{ alignContent: 'left', width: 350 }}>
                    <Text style={{ fontWeight: 'bold' }}>Peso</Text>
                </View>
                <View >
                    {options.map((option) => (
                        <TouchableOpacity
                            key={option.value}
                            onPress={() => handleSelectOption(option.value)}
                            style={style.optionContainer}
                        >
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center    ' }}>
                                <View style={{ width: 32, height: 32 }}>
                                    <Image source={peso} style={{ width: 20, height: 20 }} />
                                </View>
                                <Text style={{ color: 'black', }}>{option.label}</Text>
                            </View>

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

            </View>

            <View style={{ paddingBottom: 10, paddingTop: 50 }} >
                <TouchableOpacity style={{ width: 350, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'black' }}>Pular Etapa</Text>
                </TouchableOpacity>
            </View>

            <View style={{  paddingBottom: 10}} >
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
        borderBottomWidth: 1,


    },

});