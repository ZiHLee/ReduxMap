import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../src/Home';

const Stack = createStackNavigator();

const homeStack = () => {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              padding: 10,
            },
          }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default homeStack;
