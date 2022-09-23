import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export interface IMainProps {
}

const Main:React.FunctionComponent<IMainProps> = (props: IMainProps) => {
    
    const navigate = useNavigate();
    React.useEffect(()=>{
        navigate("/hackathons");
    }, [navigate])
    return (
        <></>
    );
}

export default Main;