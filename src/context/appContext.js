import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const shareValue = {
    title: "Belajar Context",
    description: "Sedang Belajar Context",
  };

  return (
    <AppContext.Provider value={[shareValue]}>
      {props.children}
    </AppContext.Provider>
  );
};
