import React, { createContext, useState } from 'react';

export const AccountCreationContext = createContext();

export const AccountCreationProvider = ({ children }) => {
  const [name, setName] = useState("");

  const updateName = (input) => {
    setName(input);
  };

  return (
    <AccountCreationContext.Provider value={{ name, updateName }}>
      {children}
    </AccountCreationContext.Provider>
  );
};