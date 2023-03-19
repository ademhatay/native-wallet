import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import categoryContent from '../data/CategoryContent'
import { useGeneralContext } from '../contexts/GeneralContext';
import MainCard from './MainCard';

const MainSection = () => {

	const { tab, wallet } = useGeneralContext();
	

	return <>
		<View className="flex-[2] items-center justify-evenly px-5">
			<View className="flex-row w-3/4 justify-evenly items-center mb-1">
				<Text className="text-center text-3xl">{tab.toUpperCase()}</Text>
				{wallet[tab]?.total ? <Text className="text-center text-2xl">Total: {wallet[tab]?.total}</Text> : <></>}
			</View>
			<View>
				{
					tab === 'dollar' || tab === 'euro' ? <Text>Rates By Exchange Rate API</Text> : <></>
				}
			</View>
			<ScrollView>
				<View className="flex-row flex-wrap w-full justify-evenly  flex-1">
					{
						categoryContent[tab]?.data ? categoryContent[tab]?.data.map((item, index) => (
							<MainCard key={index} item={item} />
						)) : <>
							<Text className="text-center text-2xl font-bold text-red-500">No Data</Text>
						</>
					}

				</View>
			</ScrollView>
		</View>
	</>
}

export default MainSection