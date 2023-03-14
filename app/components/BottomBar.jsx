import { View, Text, Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import categoryList from '../data/CategoryList';
import CategoryCard from './CategoryCard';
import { useGeneralContext } from '../contexts/GeneralContext';



const BottomBar = () => {
	const { tab, wallet } = useGeneralContext();

	return (
		<>
			<View className="flex-1">
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					{categoryList.map((category) => {
						return (
							<CategoryCard
								key={category.id}
								image={category.image}
								text={wallet[category.name.toLocaleLowerCase()]?.total ? wallet[category.name.toLocaleLowerCase()]?.total : 0}
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
