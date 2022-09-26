import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar, { IRoute } from '../components/NavBar';
import { SessionContext } from '../contexts/Session/SessionContext';
import Developers from './Developers';
import Hackathons from './Hackathons';
import Login from './Login';
import Main from './Main';

export interface IRoutesProps {
}

const routes:IRoute[] = [
    {
        text:"Hackathons",
        path:"/hackathons",
    },
    {
        text:"Developers",
        path:"/developers",
    }
]

export function Pages (props: IRoutesProps) {
    const sessionContext = useContext(SessionContext)
    const closeSession = ()=>{
        sessionContext.setToken("");
    }
    return (
        <BrowserRouter>
            <NavBar userName={sessionContext.userName} closeSession={closeSession} thereIsAnyToken={sessionContext.token !== ""} routes={routes}/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='hackathons' element={<Hackathons/>}/>
                <Route path='developers' element={<Developers/>}/>
                <Route path='login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}
