import React from 'react';
import {View} from 'react-native';
import BadgeCard from '../Cards/BadgeCard';

const BadgedTab = () => {
  return (
    <View className="h-96">
      <BadgeCard />
      <BadgeCard />
      <BadgeCard />
      <BadgeCard />
      <BadgeCard />
      <BadgeCard />
    </View>
  );
};

export default BadgedTab;
