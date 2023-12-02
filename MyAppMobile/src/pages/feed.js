import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import transport from "./transport";

import Info from "../../assets/info.svg";
import Config from "../../assets/config.svg";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import choice from "./choice";
import star from '../../assets/ic_star.svg';

export default function feed() {



    return (
        <Tab.Navigator tabBarOptions={{
            safeAreaInsets: {
                top: 0
            }
        }}>
            <Tab.Screen name="Inicio" component={FeedContent} />
            <Tab.Screen name="Notificações" component={FeedContent} />
            <Tab.Screen name="chat" component={FeedContent} />
            <Tab.Screen name="Pedidos" component={FeedContent} />
            <Tab.Screen name="Entregas" component={FeedContent} />
        </Tab.Navigator>
    )
}

function FeedContent() {

    const navigation = useNavigation(); // Inicialize o hook de navegação


    const paraTransporte = () => {
        navigation.navigate('transport');
    };

    const escolha = () => {
        navigation.navigate('choice');
    };

    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <View style={style.header}>
                    <Text style={{ color: 'white', backgroundColor: 'blue', borderRadius: 3, width: 32, height: 32, marginLeft: 10 }}>Foto</Text>
                    <Text style={{ color: 'white', width: 200 }}> Feed </Text>
                    <Image style={{ width: 24, height: 24 }} source={Info} />
                    <Image style={{ width: 24, height: 24 }} source={Config} />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around", height: 35 }}>
                    <Text style={{ color: 'white' }}>Viagens </Text>
                    <Text style={{ color: 'white' }}>Objetos </Text>
                </View>
            </View>
            <View style={style.centerArea}>

                <View style={style.person}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ padding: 5 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', paddingLeft: 5, }}>Hoje (12/01) - Amanhã (13/01)</Text>
                            <Text style={style.textoClaro}>Rio Brilhante para Dourados - MS</Text>
                            <Text style={style.textoClaro}>Passará por Nova Alvorada, Rio Brilhante</Text>
                        </View>

                        <View style={{ paddingLeft: 40, width: '100%' }}>
                            <Text>Mínimo</Text>
                            <Text style={style.textoEscuro}>R$ 150,00</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', paddingLeft: 10 }}>
                        <View style={style.fotos}></View>
                        <View style={{}}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Text style={style.textoEscuro}>João Vitor</Text>
                                <Text style={style.textoClaro}> •</Text>
                                <Text style={style.textoEscuro} >5,00</Text>
                                <Image source={star} style={{ width: 8, height: 8 }} />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Text style={style.textoClaro}>Verificado</Text>
                                <Text style={style.textoClaro}>•</Text>
                                <Text style={style.textoClaro}>70 Entregas</Text>
                                <Text style={style.textoClaro}>•</Text>
                                <Text style={style.textoClaro}>Carro</Text>

                            </View>
                        </View>
                    </View>
                </View>

                <View style={style.person}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ padding: 5 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', paddingLeft: 5, }}>Hoje (12/01) - Amanhã (13/01)</Text>
                            <Text style={style.textoClaro}>Rio Brilhante para Dourados - MS</Text>
                            <Text style={style.textoClaro}>Passará por Nova Alvorada, Rio Brilhante</Text>
                        </View>

                        <View style={{ paddingLeft: 40, width: '100%' }}>
                            <Text>Mínimo</Text>
                            <Text style={style.textoEscuro}>R$ 150,00</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', paddingLeft: 10 }}>
                        <View style={style.fotos}></View>
                        <View style={{}}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Text style={style.textoEscuro}>João Vitor</Text>
                                <Text style={style.textoClaro}> •</Text>
                                <Text style={style.textoEscuro} >5,00</Text>
                                <Image source={star} style={{ width: 8, height: 8 }} />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Text style={style.textoClaro}>Verificado</Text>
                                <Text style={style.textoClaro}>•</Text>
                                <Text style={style.textoClaro}>70 Entregas</Text>
                                <Text style={style.textoClaro}>•</Text>
                                <Text style={style.textoClaro}>Carro</Text>

                            </View>
                        </View>
                    </View>
                </View>

                <View style={style.person}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ padding: 5 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', paddingLeft: 5, }}>Hoje (12/01) - Amanhã (13/01)</Text>
                            <Text style={style.textoClaro}>Rio Brilhante para Dourados - MS</Text>
                            <Text style={style.textoClaro}>Passará por Nova Alvorada, Rio Brilhante</Text>
                        </View>

                        <View style={{ paddingLeft: 40, width: '100%' }}>
                            <Text>Mínimo</Text>
                            <Text style={style.textoEscuro}>R$ 150,00</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', paddingLeft: 10 }}>
                        <View style={style.fotos}></View>
                        <View style={{}}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Text style={style.textoEscuro}>João Vitor</Text>
                                <Text style={style.textoClaro}> •</Text>
                                <Text style={style.textoEscuro} >5,00</Text>
                                <Image source={star} style={{ width: 8, height: 8 }} />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', }}>
                                <Text style={style.textoClaro}>Verificado</Text>
                                <Text style={style.textoClaro}>•</Text>
                                <Text style={style.textoClaro}>70 Entregas</Text>
                                <Text style={style.textoClaro}>•</Text>
                                <Text style={style.textoClaro}>Carro</Text>

                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ position: 'absolute', bottom: 20 }}>
                <TouchableOpacity style={style.button} onPress={escolha}>
                    <Text style={{ color: 'white' }}>Vai viajar ou quer enviar ? </Text>
                </TouchableOpacity>
            </View>
            <View style={style.bottonBar}>

            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        alignItems: 'center',

    },
    topBar: {
        backgroundColor: "#222222",
        width: 375,
        height: 138,
        display: 'flex',
        flexDirection: 'collumn',
        justifyContent: 'flex-end'
    },
    centerArea: {
        width: '100%',
        justifyContent: 'center',
        width: 375,
    },
    bottonBar: {

    },
    button: {
        width: 300,
        height: 50,
        borderRadius: 40,
        backgroundColor: 'green',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'

    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignContent: 'center',
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    person: {
        height: 160,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderColor: 'black'
    },
    fotos: {
        width: 40,
        height: 40,
        backgroundColor: 'gray'
    },
    textoClaro: {
        color: 'gray',
        paddingLeft: 5
    },
    textoEscuro: {
        fontWeight: 'bold',
    }

});