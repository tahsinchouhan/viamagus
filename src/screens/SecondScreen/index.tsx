import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {
  HomeIconSVG,
  LeaderboardIconSVG,
  LeaguesIconSVG,
  ProfileIconSVG,
  ResearcheIconSVG,
} from '../../assets/icons';
import { SecondScreensNavigationProp } from '../../navigations/types';
import { COLORS } from '../../utils/constants';

const Tab = createMaterialBottomTabNavigator();

const FirstTabScreen = () => <Text>First Tab</Text>;
const SecondTabScreen = () => <Text>Second Tab</Text>;
const ThirdTabScreen = () => <Text>Third Tab</Text>;
const FourthTabScreen = () => <Text>Fourth Tab</Text>;
const FifthTabScreen = () => <Text>Fifth Tab</Text>;

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

const SecondScreen = (_props: SecondScreensNavigationProp) => {
  return (
    <Tab.Navigator
      activeColor={COLORS.active}
      barStyle={styles.barStyle}
      inactiveColor={COLORS['secondary-text']}>
      <Tab.Screen
        name="Home"
        component={FirstTabScreen}
        options={{tabBarIcon: FirstScreenTabIcon}}
      />
      <Tab.Screen
        name="Leagues"
        component={SecondTabScreen}
        options={{tabBarIcon: SecondScreenTabIcon}}
      />
      <Tab.Screen
        name="Research"
        component={ThirdTabScreen}
        options={{tabBarIcon: ThirdScreenTabIcon}}
      />
      <Tab.Screen
        name="Leaderboard"
        component={FourthTabScreen}
        options={{tabBarIcon: FourthScreenTabIcon}}
      />
      <Tab.Screen
        name="Profile"
        component={FifthTabScreen}
        options={{tabBarIcon: FifthScreenTabIcon}}
      />
    </Tab.Navigator>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#fff',
  },
});
