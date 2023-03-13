import { View, Text } from 'react-native'
import React from 'react'
import { CategoryBar, Header, Screen } from '../components'

const HomeScreen = () => {
	return <>
		<Screen>
			<Header />
			<CategoryBar />
			<View className="flex-[2] bg-red-500"></View>
			<View className="flex-1 bg-blue-500"></View>
		</Screen>
	</>
}

export default HomeScreen