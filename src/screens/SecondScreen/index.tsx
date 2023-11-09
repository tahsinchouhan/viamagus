/* eslint-disable react/no-unstable-nested-components */
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  HomeIconSVG,
  LeaderboardIconSVG,
  LeaguesIconSVG,
  ProfileIconSVG,
  ResearcheIconSVG,
} from '../../assets/icons';
import {useFont} from '../../hooks/useFont';
import {SecondScreensNavigationProp} from '../../navigations/types';
import {COLORS} from '../../utils/constants';
import FirstTab from './FirstTab';

const Tab = createMaterialBottomTabNavigator();

type TabIconProps = {
  focused: boolean;
  color: string;
};

const FirstScreenTabIcon = ({focused}: TabIconProps) => (
  <HomeIconSVG active={focused} />
);
const SecondScreenTabIcon = ({focused}: TabIconProps) => (
  <LeaguesIconSVG active={focused} />
);
const ThirdScreenTabIcon = ({focused}: TabIconProps) => (
  <ResearcheIconSVG active={focused} />
);
const FourthScreenTabIcon = ({focused}: TabIconProps) => (
  <LeaderboardIconSVG active={focused} />
);
const FifthScreenTabIcon = ({focused}: TabIconProps) => (
  <ProfileIconSVG active={focused} />
);

const TabBarIcon = ({focused, color, name}: TabIconProps & {name: string}) => {
  const font = useFont();

  let Icon: React.FC<TabIconProps> | null = null;
  if (name === 'Home') {
    Icon = FirstScreenTabIcon;
  } else if (name === 'Leagues') {
    Icon = SecondScreenTabIcon;
  } else if (name === 'Research') {
    Icon = ThirdScreenTabIcon;
  } else if (name === 'Leaderboard') {
    Icon = FourthScreenTabIcon;
  } else if (name === 'Profile') {
    Icon = FifthScreenTabIcon;
  }
  if (!Icon) {
    return 'Icon';
  }

  return (
    <View className=" w-20 items-center">
      <Icon color={color} focused={focused} />
      <Text
        className="text-xxs mt-1"
        numberOfLines={1}
        style={[{color}, font.montserrat]}>
        {name}
      </Text>
    </View>
  );
};

const SecondScreen = (_props: SecondScreensNavigationProp) => {
  return (
    <Tab.Navigator
      activeColor={COLORS.active}
      barStyle={styles.barStyle}
      labeled={false}
      screenOptions={({route}) => ({
        tabBarIcon: props => <TabBarIcon {...props} name={route.name} />,
      })}
      inactiveColor={COLORS['secondary-text']}>
      <Tab.Screen name="Home" component={FirstTab} />
      <Tab.Screen name="Leagues" component={FirstTab} />
      <Tab.Screen name="Research" component={FirstTab} />
      <Tab.Screen name="Leaderboard" component={FirstTab} />
      <Tab.Screen name="Profile" component={FirstTab} />
    </Tab.Navigator>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#fff',
  },
});
