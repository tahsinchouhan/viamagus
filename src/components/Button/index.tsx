import React from 'react';
import {Pressable, PressableProps, StyleSheet, Text, View} from 'react-native';
import {twMerge} from 'tailwind-merge';

type ButtonProps = PressableProps & {
  title: string;
  icon?: React.ReactNode;

  className?: string;
};

const Button: React.FC<ButtonProps> = ({title, icon, className, ...props}) => {
  return (
    <Pressable className="flex-1" {...props}>
      <View
        className={twMerge(
          'bg-active py-2.5 rounded-full items-center justify-center flex-row space-x-1',
          className,
        )}>
        <View className="mt-0.5">{icon}</View>
        <Text style={styles.montserrat} className="text-white text-center">
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  montserrat: {
    fontFamily: 'Montserrat-Medium',
  },
});
