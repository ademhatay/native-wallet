import React, { useContext, createContext, useState } from 'react';

// Create a context
const Context = createContext();

// Create a provider
const Provider = ({ children }) => {
  const [tab, setTab] = useState('coins');

  const data = {
    // Add your values here
    tab,
    setTab,
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
