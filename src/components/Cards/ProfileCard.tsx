import React from 'react';
import {Text, View} from 'react-native';
import {
  LossArrowIconSVG,
  ProfitArrowIconSVG,
  StarIconSVG,
} from '../../assets/icons';

const ProfileCard = () => {
  return (
    <View className="flex-row justify-between  border border-primary-border rounded-md p-6 relative">
      <View className="flex-1">
        <Text className="font-semibold text-secondary-text">Under or Over</Text>
        <View className="flex-row items-center justify-start mt-3.5 space-x-3">
          <ProfitArrowIconSVG />
          <Text className="text-2xl font-bold text-[#4F4F4F]">81%</Text>
        </View>
      </View>
      <View className="flex-1">
        <Text className="font-semibold text-secondary-text">Top 5</Text>
        <View className="flex-row items-center justify-start mt-3.5 space-x-3">
          <LossArrowIconSVG />
          <Text className="text-2xl font-bold text-[#4F4F4F]">-51% </Text>
        </View>
      </View>

      <View className="absolute -top-4 left-1/2 right-1/2">
        <StarIconSVG />
      </View>
    </View>
  );
};

export default ProfileCard;
