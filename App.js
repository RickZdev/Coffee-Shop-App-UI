import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from "tailwindcss-react-native";
import { LogBox } from 'react-native';

import AppStack from './src/navigation/AppStack';

const App = () => {
  // hidden yellow warnings
  LogBox.ignoreAllLogs(true)

  return (
    <NavigationContainer>
      <TailwindProvider>
        <AppStack />
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default App;
