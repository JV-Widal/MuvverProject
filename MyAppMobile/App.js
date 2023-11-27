import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
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

const Stack = createStackNavigator();

export default function App(){

  return(
    <NavigationContainer styles={style.container}>
      <Stack.Navigator initialRouteName="way">
        <Stack.Screen name="home" component={home}/>
        <Stack.Screen name="feed" component={feed}/>
        <Stack.Screen name="transport" component={transport}/>
        <Stack.Screen name="travelPrice" component={travelPrice}/>
        <Stack.Screen name="travelCreated" component={travelCreated}/>
        <Stack.Screen name="volumeSize" component={volumeSize}/>
        <Stack.Screen name="way" component={way}/>
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



