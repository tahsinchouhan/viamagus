import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {AppLogoSVG, MessageIconSVG} from '../../assets/icons';
import ProfileData from '../../components/ProfileTab/ProfileData';
import TabsSection from '../../components/ProfileTab/ProfileTabs';
import {useFont} from '../../hooks/useFont';

const FirstTab = () => {
  const font = useFont();
  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
      <View className="py-6 h-full flex-1 ">
        <View className="px-4 border-b-4 border-[#F3F2F7] ">
          {/* Header */}
          <View className="flex-row  justify-between items-center">
            <View className=" w-10">
              <AppLogoSVG />
            </View>
            <Text style={font.montserrat} className="text-sm">
              Profile
            </Text>
            <View className=" w-10 items-end">
              <View className="flex-row absolute z-10 -top-2 -right-1.5 justify-center items-center bg-active rounded-full w-4 h-4">
                <Text className=" text-white text-[11px]">1</Text>
              </View>
              <MessageIconSVG />
            </View>
          </View>
          {/* Profile data */}
          <ProfileData />
        </View>
        <TabsSection />
      </View>
    </ScrollView>
  );
};

export default FirstTab;
