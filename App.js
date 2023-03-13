import React from 'react'
import { Home } from './app/screens'
import GeneralProvider from './app/contexts/GeneralContext'

const App = () => {
	return <>
		<GeneralProvider>
			<Home />
		</GeneralProvider>
	</>
}

export default App