import React from 'react';
import {Text, View} from 'react-native';
import {
  ArrowIcon,
  BitCoinIconSVG,
  ChartIconSVG,
  ClockIconSVG,
  CoinIconSVG,
  EllipseIconSVG,
  InfoIconSVG,
  ProfileIconSVG,
} from '../assets/icons';
import {useFont} from '../hooks/useFont';
import {COLORS} from '../utils/constants';
import Button from './Button';

const GameCard = ({onOpen}: {onOpen: () => void}) => {
  const styles = useFont();
  return (
    <View className=" border border-[#EEEAF3] rounded">
      <View className="p-4 bg-active h-[104px]">
        <View className="flex-row justify-between items-center mb-4">
          <View className="flex-row items-center space-x-2">
            <Text
              style={styles['montserrat-semibold']}
              className="uppercase text-xs text-primary-text">
              Under or Over
            </Text>
            <View>
              <InfoIconSVG />
            </View>
          </View>
          <View className="flex-row items-center space-x-2">
            <Text style={styles.montserrat} className="text-[#B296DC]">
              Starting in
            </Text>
            <View>
              <ClockIconSVG />
            </View>
            <Text
              className="text-xs text-primary-text"
              style={styles.montserrat}>
              03:23:12
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.montserrat} className="text-sm text-primary-text">
            Bitcoin price will be under
          </Text>
          <Text className="text-white" style={styles.montserrat}>
            <Text style={styles['montserrat-bold']}>$24,524 </Text>
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
            <Text
              className="text-primary"
              style={styles['montserrat-semibold']}>
              5 <CoinIconSVG />
            </Text>
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
