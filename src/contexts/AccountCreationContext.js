import React, { createContext, useState } from 'react';

export const AccountCreationContext = createContext();

export const AccountCreationProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const updateName = (input) => {
    setName(input);
  };

  const updatePassword = (input) => {
    setPassword(input);
  };

  return (
    <AccountCreationContext.Provider value={{ name, updateName, password, updatePassword }}>
      {children}
    </AccountCreationContext.Provider>
  );
};