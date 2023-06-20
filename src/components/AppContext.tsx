import React, { createContext, useState, ReactNode } from "react";

interface AppContextProps {
  open: boolean;
  setOpenState: (value: boolean) => void;
}

export const AppContext = createContext<AppContextProps>({
  open: false,
  setOpenState: () => {},
});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const setOpenState = (value: boolean) => {
    setOpen(value);
  };

  return (
    <AppContext.Provider value={{ open, setOpenState }}>
      {children}
    </AppContext.Provider>
  );
};
