import {useState, createContext, useContext} from 'react';


// Initialize the context with a default value. This value is only used when a component doesn't have a matching Provider above in the tree.
const AuroraContext = createContext({
    AuroraOn: false,
    toggleAurora: () => {},
});

export function AuroraProvider({ children}: {children:React.ReactNode} ){
  let [aurora, setAurora] = useState(false);

  let toggleMenu = () => {
    setAurora(!aurora);
  };

  return (
    <AuroraContext.Provider value={{ AuroraOn: aurora, toggleAurora: toggleMenu }}>
      {children}
    </AuroraContext.Provider>
  );
};

export function useAuroraContext() {
  return useContext(AuroraContext);
}