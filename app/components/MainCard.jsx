import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useGeneralContext } from '../contexts/GeneralContext';



const MainCard = ({ item }) => {
	const { tab, wallet, setWallet } = useGeneralContext();

	const addMoney = (value) => {
		setWallet({
			...wallet,
			[tab]: {
				...wallet[tab],
				[item?.value]: wallet[tab][item?.value] + value,
				total: wallet[tab].total + value
			},
			total: wallet.total + value
		});
	}

	const removeMoney = (value) => {
		if (wallet[tab][item?.value] === 0) {
			return;
		}
		setWallet({
			...wallet,
			[tab]: {
				...wallet[tab],
				[item?.value]: wallet[tab][item?.value] - value,
				total: wallet[tab].total - value
			},
			total: wallet.total - value
		});
	}
	return <>
		<View className="item-card w-1/3 h-36 py-2 mx-2 my-2 rounded-xl items-center justify-evenly border-2">
			<Image className="w-20 h-20" source={item?.image} />
			<Text className="text-center text-xl">{wallet[tab][item?.value]}</Text>
			<View className="flex-row w-full justify-between items-center px-3">
				<TouchableOpacity onPress={() => addMoney(item?.value)} className="bg-green-500 w-9 h-9 rounded-full items-center justify-center">
					<MaterialIcons name="add-circle-outline" size={24} color="white" />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => removeMoney(item?.value)} className="bg-red-500 w-9 h-9 rounded-full items-center justify-center">
					<MaterialIcons name="remove-circle-outline" size={24} color="white" />
				</TouchableOpacity>
			</View>
		</View>
	</>
}

export default MainCard