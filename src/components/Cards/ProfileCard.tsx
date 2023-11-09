import React from 'react';
import {Text, View} from 'react-native';
import {
  LossArrowIconSVG,
  ProfitArrowIconSVG,
  StarIconSVG,
} from '../../assets/icons';
import {useFont} from '../../hooks/useFont';

const ProfileCard = () => {
  const font = useFont();
  return (
    <View className="flex-row justify-between   border border-[#EEEAF3] rounded-md p-5 relative">
      <View className="flex-1">
        <Text style={font.montserrat} className="text-sm text-secondary-text">
          Under or Over
        </Text>
        <View className="flex-row items-center justify-start mt-3.5 space-x-3">
          <ProfitArrowIconSVG />
          <Text
            style={font['montserrat-bold']}
            className="text-2xl text-[#4F4F4F]">
            81%
          </Text>
        </View>
      </View>
      <View className="flex-1">
        <Text style={font.montserrat} className="text-sm text-secondary-text">
          Top 5
        </Text>
        <View className="flex-row items-center justify-start mt-3.5 space-x-3">
          <LossArrowIconSVG />
          <Text
            style={font['montserrat-bold']}
            className="text-2xl  text-[#4F4F4F]">
            -51%{' '}
          </Text>
        </View>
      </View>

      <View className="absolute -top-4 left-0 right-0 items-center">
        <StarIconSVG />
      </View>
    </View>
  );
};

export default ProfileCard;
