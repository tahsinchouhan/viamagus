import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { FristScreensNavigationProp } from '../../navigations/types';

const FirstScreen = ({navigation}: FristScreensNavigationProp) => {
  return (
    <View>
      <Text style={styles.montserrat} className="text-primary text-2xl">
        Today's Games
      </Text>
      <Modal visible={true} transparent>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <Text>Modal</Text>
        </View>
      </Modal>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  montserrat: {
    fontFamily: 'Montserrat-Medium',
  },
});
