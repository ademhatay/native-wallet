import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useGeneralContext } from '../contexts/GeneralContext';
import categoryList from '../data/CategoryList';
import CategoryCard from './CategoryCard';

const CategoryBar = () => {
  const { tab, setTab } = useGeneralContext();

  return (
    <>
      <View className="my-5">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categoryList.map((category) => {
            return (
              <CategoryCard
                key={category.id}
                image={category.image}
                text={category.name}
                onPress={() => setTab(category.name.toLocaleLowerCase())}
                type="top"
              />
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default CategoryBar;
