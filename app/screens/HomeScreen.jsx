import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import {
	BottomBar,
	CategoryBar,
	Header,
	MainBanner,
	MainSection,
	Screen,
} from '../components';

const HomeScreen = () => {
	return (
		<>
			<Screen>
				<Header />
				<CategoryBar />
				<MainSection />
				<View className="flex-1">
					<MainBanner />
					<BottomBar />
				</View>
			</Screen>
		</>
	);
};

export default HomeScreen;
