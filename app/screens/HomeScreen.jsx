import { View, Text } from 'react-native';
import React from 'react';
import {
  BottomBar,
  CategoryBar,
  Header,
  MainBanner,
  Screen,
} from '../components';

const HomeScreen = () => {
  return (
    <>
      <Screen>
        <Header />
        <CategoryBar />
        <View className="flex-[2] bg-red-500">
          <Text className="text-center text-3xl">HomeScreen</Text>
        </View>
        <View className="flex-1">
          <MainBanner />
          <BottomBar />
        </View>
      </Screen>
    </>
  );
};

export default HomeScreen;
