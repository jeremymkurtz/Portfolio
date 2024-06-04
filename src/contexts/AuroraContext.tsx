import React, {useState, createContext, useContext} from 'react';
import UseLocalStorage from "@/hooks/useLocalStorage";
import {useTheme} from "next-themes";


// Initialize the context with a default value. This value is only used when a component doesn't have a matching Provider above in the tree.
const AuroraContext = createContext({
    AuroraOn: false,
    toggleAurora: () => {},
    AuroraFound: false,
    handleFoundAurora: () => {},
});

export function AuroraProvider({ children}: {children:React.ReactNode} ){
    const [value, setValue] = UseLocalStorage('foundAurora', "");
    const {setTheme} = useTheme();
    const saveToLocalStorage = () => {
        setValue(foundAurora)
    }

    let [aurora, setAurora] = useState(false);

  let toggleAuroraFunc = () => {
    setAurora(!aurora);
    setTheme("dark");
  };

  let [foundAurora, setFoundAurora] = useState(value);

  let handleFoundAuroraFunc = () => {
    setFoundAurora(true);
    saveToLocalStorage();
}



  return (
    <AuroraContext.Provider value={{ AuroraOn: aurora, toggleAurora: toggleAuroraFunc, AuroraFound: foundAurora, handleFoundAurora:handleFoundAuroraFunc}}>
      {children}
    </AuroraContext.Provider>
  );
}

export function useAuroraContext() {
  return useContext(AuroraContext);
}