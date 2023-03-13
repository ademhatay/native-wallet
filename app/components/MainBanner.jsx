import { View, Text, Image } from "react-native";
import React from "react";

const MainBanner = () => {
  return (
    <>
      <View className="flex-1 flex-row justify-evenly items-center">
        <View>
          <Text className="text-3xl font-bold">Totally: 1200TL</Text>
        </View>
        <View className="items-center">
          <Image
            className="w-20 h-20"
            source={require("../../assets/wallet.png")}
          />
          <Text className="text-base">in Wallet</Text>
        </View>
      </View>
    </>
  );
};

export default MainBanner;
