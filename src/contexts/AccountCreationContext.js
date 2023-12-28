import React, { createContext, useState } from 'react';

export const AccountCreationContext = createContext();

export const AccountCreationProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState(new Date())
  const [mobile, setMobile] = useState("");

  const updateName = (input) => {
    setName(input);
  };

  const updatePassword = (input) => {
    setPassword(input);
  };

  const updateBirthday = (input) => {
    setBirthday(input);
  }

  const updateMobile = (input) => { 
    setMobile(input);
  }

  return (
    <AccountCreationContext.Provider value={{ name, updateName, password, updatePassword, birthday, updateBirthday, mobile, updateMobile }}>
      {children}
    </AccountCreationContext.Provider>
  );
};