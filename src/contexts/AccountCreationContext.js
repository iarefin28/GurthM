import React, { createContext, useState } from 'react';

export const AccountCreationContext = createContext();

export const AccountCreationProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState(new Date())
  const [mobile, setMobile] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [code, setCode] = useState("");

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

  const updateVerificationId = (input) => { 
    setVerificationId(input);
  }

  const updateCode = (input) => {
    setCode(input);
  }


  return (
    <AccountCreationContext.Provider value={{ name, updateName, password, updatePassword, birthday, updateBirthday, mobile, updateMobile, verificationId, updateVerificationId, code, updateCode }}>
      {children}
    </AccountCreationContext.Provider>
  );
};