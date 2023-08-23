import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../styles/styles';
import ProductDetailsScreen from './ProductDetailsScreen';
import {LeftArrowButton} from '../components/buttons/LeftArrowButton';
import AddProductScreen from './AddProductScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Entypo
              name="home"
              color={focused ? COLORS.green : COLORS.gray}
              size={25}
            />
          ),
          tabBarActiveTintColor: COLORS.green,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarLabelStyle: {fontSize: 14, fontWeight: '500'},
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name="user"
              color={focused ? COLORS.green : COLORS.gray}
              size={25}
            />
          ),
          tabBarActiveTintColor: COLORS.green,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarLabelStyle: {fontSize: 14, fontWeight: '500'},
        }}
      />

      <Tab.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={() => ({
          tabBarButton: () => null,
          headerTitle: 'Product Details',
          headerLeft: () => <LeftArrowButton />,
        })}
      />

      <Tab.Screen
        name="AddProduct"
        component={AddProductScreen}
        options={() => ({
          tabBarButton: () => null,
          headerTitle: 'Add Product',
          headerLeft: () => <LeftArrowButton />,
        })}
      />
    </Tab.Navigator>
  );
};

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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

        <Stack.Screen
          name={'TabNavigation'}
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
