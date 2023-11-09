import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeScreenParams = {
  id: number;
};

type LoginScreenParams = undefined;

export type RootStackParamList = {
  FIRST_SCREEN: HomeScreenParams;
  SECOND_SCREEN: LoginScreenParams;
};

export type FristScreensNavigationProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'FIRST_SCREEN'>;
  route: RouteProp<RootStackParamList, 'FIRST_SCREEN'>;
};

export type SecondScreensNavigationProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SECOND_SCREEN'>;
  route: RouteProp<RootStackParamList, 'SECOND_SCREEN'>;
};
