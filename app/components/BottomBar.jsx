import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import categoryList from "../data/CategoryList";
import CategoryCard from "./CategoryCard";

const BottomBar = () => {
  return (
    <>
      <View className="flex-1">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categoryList.map((category) => {
            return (
              <CategoryCard
                key={category.id}
                image={category.image}
                text={123}
                type="bottom"
              />
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default BottomBar;
