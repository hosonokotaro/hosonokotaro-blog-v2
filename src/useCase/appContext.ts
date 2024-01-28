import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export type AppContextType = {
  pageTitle: string;
  setPageTitle: Dispatch<SetStateAction<string>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};

export default AppContext;
