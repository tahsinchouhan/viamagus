import {StyleSheet} from 'react-native';

export const useFont = () =>
  StyleSheet.create({
    montserrat: {
      fontFamily: 'Montserrat-Medium',
    },
    'montserrat-semibold': {
      fontFamily: 'Montserrat-SemiBold',
    },
    'montserrat-bold': {
      fontFamily: 'Montserrat-Bold',
    },
  });
