import { Button, FormControl, Input } from "@mui/material";
import FormGroup from "./../../components/FormGroup";
import { SetStateAction, useContext, useState } from "react";
import { useNavigate } from "react-router"
import FormPageContainer from "./../../components/FormPageContainer";
import SingleButtonContainer from "./../../components/SingleButtonContainer";
import { loginApiCall } from "./../../api";
import { SessionContext } from "../../contexts/Session/SessionContext";

const Login = () => {
    const sessionContext = useContext(SessionContext);
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onError = (e: { response: { status: number; }; }) => {
        console.log(e);
        if(e.response?.status === 401) {
            console.log("No Autorizado!");
        } else {
            console.log("error");
        }
    }


    const onChangeUserName = (e: { target: { value: SetStateAction<string>; }; }) =>{
        setUserName(e.target.value);
    }

    const onChangePassword = (e: { target: { value: SetStateAction<string>; }; }) =>{
        setPassword(e.target.value);
    }

    const handleLogin = async (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        loginApiCall(userName, password)
        .then(token => {
            sessionContext.setToken(token);
            navigate("/");
        })
        .catch(onError);
    }

    return (
        
        <>
            <h1 style={{textAlign: "center"}}>Iniciar Sesión</h1>
            <FormPageContainer>
                <FormGroup>
                    <FormControl sx={{ minWidth: "100%" }}>
                        <small> Usuario </small>
                        <Input onChange={onChangeUserName} id="username-txt" aria-describedby="my-helper-text" value={userName} />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl sx={{ minWidth: "100%" }}>
                        <small> Contraseña </small>
                        <Input onChange={onChangePassword} type="password" id="my-input" aria-describedby="my-helper-text" value={password} />
                    </FormControl>
                </FormGroup>
                <SingleButtonContainer>
                    <Button variant="contained" size="large" onClick={handleLogin}>Aceptar</Button>
                </SingleButtonContainer>
            </FormPageContainer>
        </>
    )
}

export default Login