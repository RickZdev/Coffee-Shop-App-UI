import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTab from './BottomTab';
import OnboardingScreen from '../screens/OnboardingScreen';
import CategoryScreen from '../screens/CategoryScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={OnboardingScreen}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name="HomeTab" component={BottomTab} options={{ presentation: 'card' }} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{ presentation: 'modal' }} />
    </Stack.Navigator>
  )
}

export default AppStack;