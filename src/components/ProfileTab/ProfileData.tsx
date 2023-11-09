import React from 'react';
import {Image, Text, View} from 'react-native';
import {EditIconSVG, LogoutIconSVG} from '../../assets/icons';
import ProfileCard from '../Cards/ProfileCard';

const ProfileData = () => {
  return (
    <View className="mt-8 mb-6 ">
      <View className="justify-center items-center mb-11 px-4">
        <View className="relative">
          <Image
            source={require('../../assets/images/user.png')}
            className="h-[75px w-[75px] rounded-full"
          />
          <View className="absolute -bottom-1 -right-1 border-2 border-primary-border p-1.5 rounded-full bg-white">
            <EditIconSVG />
          </View>
        </View>
        <Text className="text-sm font-medium text-primary mt-3">
          Jina Simons
        </Text>
        <Text className="text-xs font-medium text-secondary-text mt-2">
          6000 Pts
        </Text>
        <Text className="text-xs font-medium text-secondary-text mt-2 leading-5">
          I’m a software developer that has been in the crypto space since 2012.
          And I’ve seen it grow and falter over a period of time. Really happy
          to be here!
        </Text>
        <View className="flex-row justify-center my-5 space-x-2 items-center">
          <LogoutIconSVG />
          <Text className="text-sm font-medium text-secondary-text">
            Logout
          </Text>
        </View>
      </View>

      <ProfileCard />
    </View>
  );
};

export default ProfileData;
