import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useGeneralContext } from '../contexts/GeneralContext';

const CategoryCard = ({ onPress, image, text, type }) => {
  const { tab } = useGeneralContext();

  const bottomStyle = 'card w-20 h-auto rounded-xl items-center justify-center';
  const topStyle =
    'card w-20 h-auto mx-3 rounded-xl items-center justify-center';

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        className={
          type === 'bottom'
            ? bottomStyle
            : topStyle +
              `${
                tab === text.toLocaleLowerCase()
                  ? ' bg-green-400'
                  : ' bg-gray-200'
              }`
        }
      >
        <Image
          className={type === 'bottom' ? 'w-10 h-10' : 'w-12 h-12'}
          source={image}
        />
        <Text
          className={
            type === 'top' && tab === text.toLocaleLowerCase()
              ? 'text-lg text-white font-bold'
              : 'font-normal text-base'
          }
        >
          {text}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default CategoryCard;
