import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeScreenParams = {
  id: number;
};

type LoginScreenParams = undefined;

type RegisterScreenParams = undefined;

export type RootStackParamList = {
  FIRST_SCREEN: HomeScreenParams;
  SECOND_SCREEN: LoginScreenParams;
  THIRD_SCREEN: RegisterScreenParams;
};

export type FristScreensNavigationProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'FIRST_SCREEN'>;
  route: RouteProp<RootStackParamList, 'FIRST_SCREEN'>;
};

export type SecondScreensNavigationProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SECOND_SCREEN'>;
  route: RouteProp<RootStackParamList, 'SECOND_SCREEN'>;
};

export type ThirdScreensNavigationProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'THIRD_SCREEN'>;
  route: RouteProp<RootStackParamList, 'THIRD_SCREEN'>;
};
