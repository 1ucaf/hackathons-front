import { IColumn, IRow } from "../components/table";
import { IMiniDeveloper } from "../dtos/developer.dto";
import { ILocation, IMiniHackathon } from "../dtos/hackathons";


export const formatHackathonData = (hackathonFromAPI:IMiniHackathon[]): {data:IRow[], columns:IColumn[]} =>{
    const data:IRow[] = hackathonFromAPI.map((hFromAPI, index) => {
        const Row:IRow = {
            id:index,
            data: [
                {
                    key:"id",
                    value:hFromAPI.id.name + ": " + hFromAPI.id.value
                },
                {
                    key:"name",
                    value:hFromAPI.name
                },
                {
                    key:"date",
                    value:hFromAPI.date.toLocaleString()
                },
                {
                    key:"place",
                    value:placeToString(hFromAPI.place)
                },
            ]
        }
        return Row;
    });
    const columns:IColumn[] = [
        {
            key: "id",
            text: "id",
        },
        {
            key: "name",
            text: "name",
        },
        {
            key: "date",
            text: "date",
        },
        {
            key: "place",
            text: "place",
        },
    ]
    return {data, columns};
}

export const formatDevelopersData = (developersFromAPI:IMiniDeveloper[]): {data:IRow[], columns:IColumn[]} =>{
    const data:IRow[] = developersFromAPI.map((dFromAPI, index) => {
        const Row:IRow = {
            id:index,
            data: [
                {
                    key:"name",
                    value:dFromAPI.name
                },
                {
                    key:"age",
                    value:dFromAPI.age
                },
                {
                    key:"gender",
                    value:dFromAPI.gender
                },
            ]
        }
        return Row;
    });
    const columns:IColumn[] = [
        {
            key: "name",
            text: "name",
        },
        {
            key: "age",
            text: "age",
        },
        {
            key: "gender",
            text: "gender",
        },
    ]
    return {data, columns};
}

const placeToString = (place:ILocation) => {
    return `${place.street.name}, ${place.street.number}; ${place.city}, ${place.country}`;
}

export const getToken = () => {
    const token = getCookie("token");
    return token;
}

export const setToken = (token:string) => {
    setCookie({
        cname: "token",
        cvalue: token,
        exhours: 4,
    })
}

export const getCookie = (cname:string) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

export const setCookie = ({cname, cvalue, exmins, exhours, exdays}:{cname:string, cvalue:string, exmins?:number|undefined, exhours?:number|undefined, exdays?:number|undefined}) => {
    const d = new Date();
    const dif = 3*60*60*1000;
    d.setTime(d.getTime() - dif);
    if (exmins)     d.setTime(d.getTime() + (exmins*60*1000));
    if (exhours)    d.setTime(d.getTime() + (exhours*60*60*1000));
    if (exdays)     d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    console.log((new Date()).toUTCString());
    console.log(expires);
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}