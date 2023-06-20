import React, { createContext, useState, ReactNode } from "react";
import { User } from "../interface/UserInterface";

interface LoginContextProps {
  isLogged: boolean;
  user: User;
  setLoginState: (value: boolean, user: User) => void;
}

export const LoginContext = createContext<LoginContextProps>({
  isLogged: false,
  user: {},
  setLoginState: () => {},
});

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [state, setState] = useState({
    isLogged: false,
    user: {} as User, // Use "as User" to indicate the type of user object
  });

  const setLoginState = (value: boolean, user: User) => {
    setState((prevState) => ({
      ...prevState,
      isLogged: value,
      user,
    }));
  };

  return (
    <LoginContext.Provider
      value={{ isLogged: state.isLogged, user: state.user, setLoginState }}
    >
      {children}
    </LoginContext.Provider>
  );
};
