
import { View, Text, TouchableOpacity, Image,StyleSheet  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import DatePicker from 'react-native-date-picker';

import React from 'react';


export default function way() {



    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <View>
                    <Text style={{ color: 'gray' }}>Ser um muvver</Text>
                </View>
                <View>
                    <Text style={{ textAlign: "left", color: 'white' }}>Qual o trajeto da sua viagem?</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around", }}>
                    <Text style={{ color: 'white' }}>Viagens </Text>
                    <Text style={{ color: 'white' }}>Objetos </Text>
                </View>
            </View>
            <View style={style.centerArea}>
                <Text>Selecione a data e rota da sua viagem</Text>
                <View>

                </View>

                <View>

                </View>

                <TouchableOpacity style={style.button}>
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
        width: 375,
        height: 850,
    },
    topBar: {
        backgroundColor: "#222222",
        width: 375,
        height: 138,
        display: 'flex',
        flexDirection: 'collum'
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