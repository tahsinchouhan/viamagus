import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {AppLogoSVG, MessageIconSVG} from '../../assets/icons';
import ProfileData from '../../components/ProfileTab/ProfileData';
import TabsSection from '../../components/ProfileTab/ProfileTabs';

const FirstTab = () => {
  return (
    <ScrollView>
      <View className="py-6">
        <View className="px-4 border-b-4 border-[#F3F2F7] ">
          {/* Header */}
          <View className="flex-row justify-between items-center">
            <AppLogoSVG />
            <Text className="text-sm font-medium">Profile</Text>
            <MessageIconSVG />
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
