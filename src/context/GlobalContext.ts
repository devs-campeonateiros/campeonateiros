import { createContext, ReactNode } from "react";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IGlobalContext{
}

export const GlobalContext = createContext({} as IGlobalContext);

export const GlobalProvider = ({ children }: IAuthProviderProps) => {
  return (
<GlobalContext.Provider 
  value={{"batata"}}>
  {children}
  </GlobalContext.Provider>
  )
};
