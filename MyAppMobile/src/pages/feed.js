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
                    <Text style={{ color: 'white', backgroundColor: 'blue', borderRadius: 3, width: 32, height: 32 }}>Foto</Text>
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
                    <View>
                        <Text>Data</Text>
                        <Text>Localização</Text>
                    </View>
                    <View>
                        <Text>Mínimo</Text>
                        <Text>R$</Text>
                    </View>
                    <View>
                        <Text>Foto</Text>
                        <View>
                            <View>
                                <Text>Nome</Text>
                                <Text>Nota</Text>
                            </View>
                            <View>
                                <Text>Entregas</Text>
                                <Text>Transporte</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={style.person}>

                </View>
                <View style={style.person}>

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
        //width: 105,
        //height: 345,
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
    }

});