import React from 'react';
import { getToken, getUserNameCookie, setToken as setTokenCookie, setUserNameCookie } from '../../utils';

export const SessionContext = React.createContext({
    token: getToken(),
    setToken: (_value:string) => {},
    userName: getUserNameCookie(),
    setUserName: (_value:string) => {}
  });

interface ISessionProviderProps {
    children: React.ReactNode,
}

const SessionProvider: React.FunctionComponent<ISessionProviderProps> = ({ children }) => {
    const [token, setTokenState] = React.useState(getToken());
    const [userName, setUser] = React.useState(getUserNameCookie());
    const setUserName = (user:string) => {
        setUser(user);
        setUserNameCookie(user);
    }
    const setToken = (tokenParam:string) => {
        setTokenState(tokenParam);
        setTokenCookie(tokenParam);
    }
    return (
        <SessionContext.Provider
            value={{ token, setToken, userName, setUserName }}
        >
            {children}
        </SessionContext.Provider>
    )
}

export default SessionProvider;