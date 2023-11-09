import React from 'react';
import {Text, View} from 'react-native';
import {
  ArrowIcon,
  ChartIconSVG,
  CoinIconSVG,
  ProfileIconSVG,
} from '../assets/icons';
import {useFont} from '../hooks/useFont';
import {COLORS} from '../utils/constants';
import Button from './Button';
import GameInfoCard from './Cards/GameInfoCard';

const GameCard = ({onOpen}: {onOpen: () => void}) => {
  const styles = useFont();
  return (
    <View className=" border border-[#EEEAF3] rounded">
      <GameInfoCard />
      <View className="h-[173px] p-4 space-y-[22px]">
        <View className="flex-row justify-between">
          <View className="space-y-2">
            <Text
              className="text-tertiary-text uppercase text-xs"
              style={styles.montserrat}>
              Prize Pool
            </Text>
            <Text
              className="text-primary"
              style={styles['montserrat-semibold']}>
              $12,000
            </Text>
          </View>
          <View className="space-y-2">
            <Text
              className="text-tertiary-text uppercase text-xs"
              style={styles.montserrat}>
              Under
            </Text>
            <Text
              className="text-primary"
              style={styles['montserrat-semibold']}>
              3.25x
            </Text>
          </View>
          <View className="space-y-2">
            <Text
              className="text-tertiary-text uppercase text-xs"
              style={styles.montserrat}>
              Over
            </Text>
            <Text
              className="text-primary"
              style={styles['montserrat-semibold']}>
              1.25x
            </Text>
          </View>
          <View className="space-y-2">
            <Text
              className="text-tertiary-text uppercase text-xs"
              style={styles.montserrat}>
              Entry Fees
            </Text>
            <View className="flex-row justify-end items-center space-x-1">
              <Text
                className="text-primary"
                style={styles['montserrat-semibold']}>
                5
              </Text>
              <View className="mt-0.5">
                <CoinIconSVG />
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text
            className="text-secondary-text"
            style={styles['montserrat-semibold']}>
            What’s your prediction?
          </Text>
          <View className="flex-row pt-[14px] justify-between gap-[17.5px]">
            <Button
              title="Under"
              icon={<ArrowIcon />}
              className="bg-[#452C55]"
            />
            <Button
              title="Over"
              icon={<ArrowIcon direction="up" />}
              onPress={onOpen}
            />
          </View>
        </View>
      </View>
      <View className="h-[110px] bg-[#F6F3FA] px-[15px] py-[21px]">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-1">
            <ProfileIconSVG size={15} color={COLORS['secondary-text']} />
            <Text
              className="text-secondary-text mb-0.5"
              style={styles['montserrat-semibold']}>
              355 Players
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <ChartIconSVG />
            <Text
              className="text-secondary-text mb-0.5"
              style={styles['montserrat-semibold']}>
              View chart
            </Text>
          </View>
        </View>
        <View className="mt-[14px]">
          <View className="flex-row">
            <View className="h-[10px] rounded-l-full w-4/5 bg-failure" />
            <View className="h-[10px] rounded-r-full w-1/5 bg-success" />
          </View>
        </View>
        <View className="flex-row mt-[14px] items-center justify-between">
          <Text
            className="text-tertiary-text text-xs"
            style={styles.montserrat}>
            232 predicted under
          </Text>
          <Text
            className="text-tertiary-text text-xs"
            style={styles.montserrat}>
            123 predicted over
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GameCard;
