import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {Picker} from 'react-native-wheel-pick';
import {CoinIconSVG} from '../assets/icons';
import {useFont} from '../hooks/useFont';
import {RootStackParamList} from '../navigations/types';
import {COLORS} from '../utils/constants';
import Button from './Button';

type PredictionModalProps = {
  modalVisible: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
};

const PredictionModal: React.FC<PredictionModalProps> = ({
  modalVisible,
  onOpenModal,
  onCloseModal,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const font = useFont();
  return (
    <GestureRecognizer>
      <Modal
        visible={modalVisible}
        onRequestClose={onCloseModal}
        onShow={onOpenModal}
        animationType="slide"
        transparent>
        <Pressable onPress={onCloseModal} className="bg-gray-800/30 flex-1">
          <Pressable className="h-[468px] bg-white mt-auto rounded-t-[20px] p-4 pt-5">
            <View className="h-1 w-[30px] bg-tertiary-text mx-auto rounded-full" />
            <Text
              className="text-primary text-2xl mt-5"
              style={font.montserrat}>
              Your Prediction is Under
            </Text>
            <Text
              style={font.montserrat}
              className="uppercase text-secondary-text mt-7">
              Entry tickets
            </Text>
            <Picker
              style={styles.picker}
              selectedValue={'10'}
              textSize={24}
              textColor={COLORS.primary}
              pickerData={new Array(20).fill(0).map((_, i) => i + 1)}
              onValueChange={(value: string) => console.log(value)}
            />
            <Text
              style={font.montserrat}
              className="text-xs text-tertiary-text mb-1">
              You can win
            </Text>
            <View className="flex-row justify-between mb-7">
              <Text
                style={font['montserrat-semibold']}
                className="text-xs text-success">
                $2000
              </Text>
              <View className="flex-row items-center space-x-1">
                <Text
                  style={font.montserrat}
                  className="text-xs text-tertiary-text">
                  Total
                </Text>
                <View>
                  <CoinIconSVG />
                </View>
                <Text
                  style={font['montserrat-semibold']}
                  className="text-black">
                  5
                </Text>
              </View>
            </View>
            <Button
              title="Submit my prediction"
              onPress={() => {
                onCloseModal();
                navigation.navigate('SECOND_SCREEN');
              }}
            />
          </Pressable>
        </Pressable>
      </Modal>
    </GestureRecognizer>
  );
};

export default PredictionModal;

const styles = StyleSheet.create({
  picker: {
    width: '100%',
    height: 160,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 20,
  },
});
