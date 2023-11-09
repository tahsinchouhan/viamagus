import React from 'react';
import {Text, View} from 'react-native';
import {
  BitCoinIconSVG,
  ClockIconSVG,
  EllipseIconSVG,
  InfoIconSVG,
} from '../../assets/icons';
import {useFont} from '../../hooks/useFont';

const GameInfoCard = () => {
  const font = useFont();
  return (
    <View className="p-4 bg-active h-[104px]">
      <View className="flex-row justify-between items-center mb-4">
        <View className="flex-row items-center space-x-2">
          <Text
            style={font['montserrat-semibold']}
            className="uppercase text-xs text-primary-text">
            Under or Over
          </Text>
          <View>
            <InfoIconSVG />
          </View>
        </View>
        <View className="flex-row items-center space-x-2">
          <Text style={font.montserrat} className="text-[#B296DC]">
            Starting in
          </Text>
          <View>
            <ClockIconSVG />
          </View>
          <Text className="text-xs text-primary-text" style={font.montserrat}>
            03:23:12
          </Text>
        </View>
      </View>
      <View>
        <Text style={font.montserrat} className="text-sm text-primary-text">
          Bitcoin price will be under
        </Text>
        <Text className="text-white" style={font.montserrat}>
          <Text style={font['montserrat-bold']}>$24,524 </Text>
          at 7 a ET on 22nd Jan’21
        </Text>
      </View>
      <View className="absolute -z-10 bottom-0 right-0">
        <BitCoinIconSVG />
      </View>
      <View className="absolute -z-20 bottom-0 right-0 ">
        <EllipseIconSVG />
      </View>
    </View>
  );
};

export default GameInfoCard;
