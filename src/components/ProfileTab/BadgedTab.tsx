import React from 'react';
import {View} from 'react-native';
import BadgeCard from '../Cards/BadgeCard';

const BadgedTab = () => {
  const badges = [
    {
      title: 'First Stripe Earned',
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      title: 'Born Winner',
      desc: 'Top 10% of highest spending players in a month',
    },
    {title: 'Trader of the Month ', desc: 'Won 7 under-over games in a row'},
    {
      title: 'Rising Star ',
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      title: 'Jackpot ',
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      title: 'Impossible ',
      desc: 'Top 10% of highest spending players in a month',
    },
  ];
  return (
    <View className="bg-[#F3F2F7] h-full p-4 ">
      {badges.map((badge, index) => (
        <BadgeCard key={index} title={badge.title} desc={badge.desc} />
      ))}
      <View className="h-40 pt-40 w-full" />
    </View>
  );
};

export default BadgedTab;
