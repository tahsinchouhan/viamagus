import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreens';
import {SCREENS} from './constant';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREENS.FIRST_SCREEN} component={FirstScreen} />
      <Stack.Screen name={SCREENS.SECOND_SCREEN} component={SecondScreen} />
      <Stack.Screen name={SCREENS.THIRD_SCREEN} component={ThirdScreen} />
    </Stack.Navigator>
  );
};

export default StackScreens;
