import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useGeneralContext } from '../contexts/GeneralContext';
import categoryList from '../data/CategoryList';


const CategoryBar = () => {

	const { tab, setTab } = useGeneralContext();

	return <>
		<View className="my-5">
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
				{
					categoryList.map((category) => {
						return <TouchableOpacity onPress={() => setTab(category.name.toLocaleLowerCase())} key={category.id} className={`card w-20 mx-3 h-auto rounded-xl items-center justify-center ${tab === category.name.toLocaleLowerCase() ? "bg-gray-700" : "bg-white"}`}>
							<Image className="w-12 h-12" source={category.image} />
							<Text className={`text-lg ${tab === category.name.toLocaleLowerCase() ? "font-bold text-white" : "font-normal"} `}>{category.name}</Text>
						</TouchableOpacity>
					})
				}

			</ScrollView>
		</View>
	</>
}

export default CategoryBar