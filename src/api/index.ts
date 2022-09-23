import axios from "axios"
import { IMiniDeveloper } from "../dtos/developer.dto";
import { IMiniHackathon } from "../dtos/hackathons";
import { getToken } from "../utils";


export const getHackathons = async ():Promise<IMiniHackathon[]>=>{
    axios.defaults.headers.common["Authorization"] = "Bearer " + getToken();
    let data = [];
    data = await axios.get("http://localhost:8080/hackathons")
    .then(response=>{
        return response.data;
    })
    .catch(e => {
        console.log(e);
    });
    return data;
}

export const getDevelopers = async (id:{name:string, value:string})=>{
    axios.defaults.headers.common["Authorization"] = "Bearer " + getToken();
    let data = [];
    data = await axios.get(`http://localhost:8080/hackathons/developers/${id.name}/${id.value}`)
    .then(response=>{
        return response.data;
    })
    .catch(e => {
        console.log(e);
    })
    return data;
}

export const getTopDevelopers = async ():Promise<IMiniDeveloper[]>=>{
    axios.defaults.headers.common["Authorization"] = "Bearer " + getToken();
    let data = [];
    data = await axios.get("http://localhost:8080/developers/top")
    .then(response=>{
        return response.data;
    })
    .catch(e => {
        console.log(e);
    });
    return data;
}



export const loginApiCall = async (userName:string, password:string) => {
    try {
        const body = {
            username: userName,
            password: password,
        }
        const response = await axios.post("http://localhost:8080/auth/login/", body);
        return response.data.access_token;
    } catch (error) {
        throw error;
    }
}