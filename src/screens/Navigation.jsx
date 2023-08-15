import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
