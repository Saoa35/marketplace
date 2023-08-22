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

const TabNavigation = ({
  productId,
  setProductId,
  userAvatar,
  setUserAvatar,
}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
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
        }}>
        {() => <HomeScreen productId={productId} setProductId={setProductId} />}
      </Tab.Screen>

      <Tab.Screen
        name="Profile"
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
        }}>
        {() => (
          <ProfileScreen
            userAvatar={userAvatar}
            setUserAvatar={setUserAvatar}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="ProductDetails"
        options={() => ({
          tabBarButton: () => null,
          headerTitle: 'Product Details',
          headerLeft: () => <LeftArrowButton />,
        })}>
        {() => (
          <ProductDetailsScreen productId={productId} userAvatar={userAvatar} />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="AddProduct"
        options={() => ({
          tabBarButton: () => null,
          headerTitle: 'Add Product',
          headerLeft: () => <LeftArrowButton />,
        })}>
        {() => <AddProductScreen userData={userData} />}
      </Tab.Screen>

      {/* <Tab.Screen
        name="AddProduct"
        component={AddProductScreen}
        options={() => ({
          tabBarButton: () => null,
          headerTitle: 'Add Product',
          headerLeft: () => <LeftArrowButton />,
        })}
      /> */}
    </Tab.Navigator>
  );
};

function Navigation() {
  const [productId, setProductId] = useState('');
  const [userAvatar, setUserAvatar] = useState(null);

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

        <Stack.Screen name={'TabNavigation'} options={{headerShown: false}}>
          {() => (
            <TabNavigation
              productId={productId}
              setProductId={setProductId}
              userAvatar={userAvatar}
              setUserAvatar={setUserAvatar}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
