import React, { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a context
const Context = createContext();

// Create a provider
const Provider = ({ children }) => {
	const [tab, setTab] = useState('coins');
	const [usd, setUsd] = useState(0);
	const [eur, setEur] = useState(0);
	const [gold, setGold] = useState({
		"1": 0,
		"25": 0,
		"50": 0,
		"100": 0,
	});
	const [wallet, setWallet] = useState({
		"coins": {
			10: 0,
			25: 0,
			50: 0,
			100: 0,
			total: 0
		},
		"cash": {
			10: 0,
			20: 0,
			50: 0,
			100: 0,
			200: 0,
			total: 0
		},
		"euro": {
			10: 0,
			50: 0,
			100: 0,
			total: 0
		},
		"dollar": {
			10: 0,
			50: 0,
			100: 0,
			total: 0
		},
		"gold": {
			1: 0,
			25: 0,
			50: 0,
			100: 0,
			total: 0
		},
		"total": 0
	});

	// https://open.er-api.com/v6/latest/EUR
	// https://open.er-api.com/v6/latest/USD
	// get two currencies
	const getRates = async () => {
		try {
			const response = await axios.get('https://open.er-api.com/v6/latest/EUR');
			const response2 = await axios.get('https://open.er-api.com/v6/latest/USD');
			setEur(response.data.rates.TRY.toFixed(1));
			setUsd(response2.data.rates.TRY.toFixed(1));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getRates();
	}, []);

	const data = {
		// Add your values here
		tab,
		setTab,
		wallet,
		setWallet,
		usd,
		setUsd,
		eur,
		setEur,
		gold,
		setGold
	};

	return <Context.Provider value={data}>{children}</Context.Provider>;
};

// Create a hook

export const useGeneralContext = () => {
	const context = useContext(Context);

	if (!context) {
		throw new Error('useGeneralContext must be used within a Provider');
	}

	return context;
};

export default Provider;
