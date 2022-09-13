import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeartIcon, HomeIcon, ShoppingCartIcon, } from "react-native-heroicons/solid";
import { UserCircleIcon } from "react-native-heroicons/outline";
import HomeScreen from '../screens/HomeScreen'
import FavouriteScreen from '../screens/FavouriteScreen'
import CartScreen from '../screens/CartScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={HomeScreen}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#F8F7FA',
          borderTopColor: '#AF795D',
          borderTopWidth: 2,
          height: 85,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          paddingTop: 20
        },
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '800', fontFamily: 'Poppins-Medium', paddingBottom: 15 },
        tabBarActiveTintColor: '#AF795D',
        tabBarInactiveTintColor: '#CBCBD4',
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
          tabBarLabel: "Home",
          tabBarItemStyle: { borderTopColor: 2 }
        }}
      />

      <Tab.Screen name="FavouriteScreen" component={FavouriteScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HeartIcon color={color} size={size} />
          ),
          tabBarLabel: "Favourite",
        }}
      />

      <Tab.Screen name="CartScreen" component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ShoppingCartIcon color={color} size={size} />
          ),
          tabBarLabel: "Cart",
        }}
      />

      <Tab.Screen name="ProfileScreen" component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserCircleIcon color={color} size={size} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTab