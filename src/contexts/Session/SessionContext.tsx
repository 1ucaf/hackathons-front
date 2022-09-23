import React from 'react';
import { getToken, setToken as setTokenCookie } from '../../utils';

export const SessionContext = React.createContext({
    token: getToken(),
    setToken: (_value:string) => {}
  });

interface ISessionProviderProps {
    children: React.ReactNode,
}

const SessionProvider: React.FunctionComponent<ISessionProviderProps> = ({ children }) => {
    const [token, setTokenState] = React.useState(getToken());
    const setToken = (tokenParam:string) => {
        setTokenState(tokenParam);
        setTokenCookie(tokenParam);
    }
    return (
        <SessionContext.Provider
            value={{ token, setToken }}
        >
            {children}
        </SessionContext.Provider>
    )
}

export default SessionProvider;