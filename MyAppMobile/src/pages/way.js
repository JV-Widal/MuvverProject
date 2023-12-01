
import { View, Text, TouchableOpacity, Image, StyleSheet, useState } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import DatePicker from 'react-native-date-picker';
import { enGB, registerTranslation } from 'react-native-paper-dates';
import { DatePickerInput } from 'react-native-paper-dates';

import React from 'react';

import circleplus from '../../assets/circleplus.svg';

import TravelPrice from './travelPrice';

export default function way() {

    const [inputDate, setInputDate,] = React.useState(undefined)
    const [inputDate2, setInputDate2] = React.useState(undefined)

    const [clickado, setClick] = React.useState(false);
    const [mostraCityCard, setMostrarCityCard] = React.useState(true);

    const handlePress = () => {
        setClick(!clickado);
        setMostrarCityCard(!mostraCityCard);
        setIsHidden(!isHidden);
    };

    const [isHidden, setIsHidden] = React.useState(true);

    

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
                    <Text style={{ color: 'white' }}>Rotas </Text>
                    <Text style={{ color: 'white' }}>Objetos </Text>
                </View>
            </View>
            <View style={style.centerArea}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', padding: 10 }}>Selecione a data e rota da sua viagem</Text>
                <View style={{ padding: 10, justifyContent: 'space-between', }}>
                    <View style={{ borderStyle: 'solid', borderColor: 'black', borderWidth: 2, marginBottom: 20 }}>
                        <DatePickerInput
                            locale="en"
                            label="Data de Coleta"
                            value={inputDate}
                            onChange={(d) => setInputDate(d)}
                            inputMode="start"
                        />
                    </View>

                    <View style={{ borderStyle: 'solid', borderColor: 'black', borderWidth: 2, marginBottom: 20 }}>
                        <DatePickerInput
                            locale="en"
                            label="Data de Entrega"
                            value={inputDate2}
                            onChange={(e) => setInputDate2(e)}
                            inputMode="start"
                        />
                    </View>
                </View>

                <View style={style.cityCard}>
                    <View style={{ textAlign: 'left' }}>
                        <Text style={{ fontWeight: 'bold' }}>Cidade de origem</Text>
                        <Text>Rio Brilhante, MS </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{ width: 10, height: 10, backgroundColor: 'gray', borderRadius: 5 }} />
                    </View>
                </View>

                {!isHidden && (
                    <View style={style.cityCard}>
                        <View style={{ textAlign: 'left' }}>
                            <Text style={{ fontWeight: 'bold' }}>Ponto Intermediario</Text>
                            <Text>Rio Campo Grande, MS </Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{ width: 10, height: 10, backgroundColor: 'gray', borderRadius: 5 }} />
                        </View>
                    </View>
                )}

                {mostraCityCard && (
                    <TouchableOpacity onPress={handlePress} style={{ display: 'flex', flexDirection: 'row ', justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}>
                        <View>
                            <Image style={style.plus} source={circleplus} />
                        </View>
                        <View style={{ marginLeft: 5 }}>
                            <Text style={{ fontWeight: 'bold' }}>Adicionar ponto intermediário</Text>
                            <Text>E aumente sua chance de match</Text>
                        </View>
                    </TouchableOpacity>
                )}

                <View style={style.cityCard}>
                    <View style={{ textAlign: 'left' }}>
                        <Text style={{ fontWeight: 'bold' }}>Cidade de destino</Text>
                        <Text>Dourados, MS </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{ width: 10, height: 10, backgroundColor: 'green', borderRadius: 5 }} />
                    </View>
                </View>

                <TouchableOpacity style={style.button} onPress={TravelPrice}>
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