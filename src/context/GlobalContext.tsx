import React, { createContext, ReactNode, useState } from "react";

interface IAuthProviderProps {
    children: ReactNode;
}
interface IGlobalContext {
    user: IUser;
}

interface IUser {
    id: string;
    name: string;
    email: string;
}
export const GlobalContext = createContext<IGlobalContext>(
    {} as IGlobalContext
);

export const GlobalProvider = ({ children }: IAuthProviderProps) => {
    const [user, setUser] = useState<IUser>({} as IUser);
    return (
        <GlobalContext.Provider value={{ user }}>
            {children}
        </GlobalContext.Provider>
    );
};
