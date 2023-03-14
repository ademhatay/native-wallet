import React, { useContext, createContext, useState } from 'react';

// Create a context
const Context = createContext();

// Create a provider
const Provider = ({ children }) => {
	const [tab, setTab] = useState('coins');
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

	const data = {
		// Add your values here
		tab,
		setTab,
		wallet,
		setWallet
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
