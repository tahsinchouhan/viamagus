import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import {SCREENS} from './constant';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SCREENS.FIRST_SCREEN}>
      <Stack.Screen name={SCREENS.FIRST_SCREEN} component={FirstScreen} />
      <Stack.Screen name={SCREENS.SECOND_SCREEN} component={SecondScreen} />
    </Stack.Navigator>
  );
};

export default StackScreens;
