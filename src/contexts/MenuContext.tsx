import {useState, createContext, useContext} from 'react';


// Initialize the context with a default value. This value is only used when a component doesn't have a matching Provider above in the tree.
const MenuContext = createContext({
    menuIsOpen: false,
    toggleMenu: () => {},
});

export function MenuProvider({ children}: {children:React.ReactNode} ){
  let [isOpen, setIsOpen] = useState(false);

  let toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContext.Provider value={{ menuIsOpen: isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export function useMenuContext() {
  return useContext(MenuContext);
}