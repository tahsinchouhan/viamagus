import React from 'react';
import {Text, View} from 'react-native';
import GameCard from '../../components/GameCard';
import PredictionModal from '../../components/PredictionModal';
import {useFont} from '../../hooks/useFont';
import {FristScreensNavigationProp} from '../../navigations/types';

const FirstScreen = (_props: FristScreensNavigationProp) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const onOpenModal = () => setModalVisible(true);
  const onCloseModal = () => setModalVisible(false);
  const styles = useFont();
  return (
    <View className="p-4">
      <Text style={styles.montserrat} className="text-primary text-2xl">
        Today's Games
      </Text>
      <View className="mt-4">
        <GameCard onOpen={onOpenModal} />
      </View>
      <PredictionModal
        modalVisible={modalVisible}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
      />
    </View>
  );
};

export default FirstScreen;
