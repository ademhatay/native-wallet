import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return <>
	<View className="w-full h-16 items-center justify-center bg-gray-700">
		<Text className="text-2xl text-white">
			<Text className="text-red-500 text-3xl font-semibold">N</Text>ative <Text className="text-orange-500 text-3xl font-semibold">W</Text>allet
		</Text>
	</View>
  </>
}

export default Header