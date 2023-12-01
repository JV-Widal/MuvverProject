import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator} from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';



import home from './src/pages/home';
import feed from './src/pages/feed';
import transport from './src/pages/transport';
import travelPrice from './src/pages/travelPrice';
import travelCreated from './src/pages/travelCreated';
import volumeSize from './src/pages/volumeSize';
import way from './src/pages/way';
import choice from './src/pages/choice';
import weight from './src/pages/weight';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer styles={style.container}>
      <Stack.Navigator initialRouteName="transport" >
        <Stack.Screen name="home" component={home} options={{ headerShown: false }} />
        <Stack.Screen name="feed" component={feed} options={{ headerShown: false }} />
        <Stack.Screen name="transport" component={transport} options={{ headerShown: false }} />
        <Stack.Screen name="travelPrice" component={travelPrice} options={{ headerShown: false }} />
        <Stack.Screen name="travelCreated" component={travelCreated} options={{ headerShown: false }} />
        <Stack.Screen name="volumeSize" component={volumeSize} options={{ headerShown: false }} />
        <Stack.Screen name="way" component={way} options={{ headerShown: false }} />
        <Stack.Screen name="choice" component={choice} options={{ headerShown: false }} />
        <Stack.Screen name="weight" component={weight} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



