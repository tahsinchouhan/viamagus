import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackScreens from './Stack.screens';

const AppNavigation = () => {
  return (
    <NavigationContainer
      theme={{
        colors: {
          primary: '#FFFFFF',
          background: '#FFFFFF',
          card: '',
          text: '',
          border: '',
          notification: '',
        },
        dark: false,
      }}>
      <StackScreens />
    </NavigationContainer>
  );
};

export default AppNavigation;
