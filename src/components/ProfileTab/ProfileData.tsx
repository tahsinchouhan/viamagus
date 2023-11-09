import React from 'react';
import {Image, Text, View} from 'react-native';
import {EditIconSVG, LogoutIconSVG} from '../../assets/icons';
import {useFont} from '../../hooks/useFont';
import ProfileCard from '../Cards/ProfileCard';

const ProfileData = () => {
  const font = useFont();
  return (
    <View className="mt-[26px] mb-6 ">
      <View className="justify-center items-center mb-11">
        <View>
          <Image
            source={require('../../assets/images/user.png')}
            className="h-[75px w-[75px] rounded-full"
          />
          <View className="absolute w-6 h-6 justify-center items-center bottom-0 right-0 border border-[#EEEAF3]  rounded-full bg-white">
            <EditIconSVG />
          </View>
        </View>
        <Text style={font.montserrat} className="text-sm text-primary mt-3">
          Jina Simons
        </Text>
        <Text
          style={font.montserrat}
          className="text-xs text-secondary-text mt-2">
          6000 Pts
        </Text>
        <Text
          style={font.montserrat}
          className="text-sm text-secondary-text mt-2 leading-5">
          I’m a software developer that has been in the crypto space since 2012.
          And I’ve seen it grow and falter over a period of time. Really happy
          to be here!
        </Text>
        <View className="flex-row justify-center mt-5 mb-5 space-x-2 items-center">
          <LogoutIconSVG />
          <Text style={font.montserrat} className="text-sm text-secondary-text">
            Logout
          </Text>
        </View>
      </View>
      <ProfileCard />
    </View>
  );
};

export default ProfileData;
