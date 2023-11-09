import React from 'react';
import {Image, Text, View} from 'react-native';
import {useFont} from '../../hooks/useFont';

const BadgeCard = ({title, desc}: {title: string; desc: string}) => {
  const font = useFont();
  return (
    <View className="h-[105px] border mb-4 flex-row border-[#EEEAF3] rounded-[5px] py-5 px-4 bg-white w-full">
      <View>
        <Image source={require('../../assets/images/badges.png')} />
      </View>
      <View className="px-4">
        <Text
          style={font.montserrat}
          className="text-sm capitalize text-primary mb-1.5">
          {title}
        </Text>
        <Text
          style={font.montserrat}
          className="text-sm w-[65%] text-secondary-text">
          {desc}
        </Text>
      </View>
    </View>
  );
};

export default BadgeCard;
