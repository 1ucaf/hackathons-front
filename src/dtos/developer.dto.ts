import { ILocation } from "./hackathons";

export interface IMiniDeveloper {
    name:string,
    age:string,
    gender:string,
}

export interface IDeveloper extends Result {
    rank: number;
}

export interface Name {
    title: string;
    first: string;
    last: string;
}


export interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface Dob {
    date: Date|string;
    age: number;
}

export interface Registered {
    date: Date|string;
    age: number;
}

export interface Id {
    name: string;
    value: string;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface Result {
    gender: string;
    name: Name;
    location: ILocation;
    email: string;
    login: Login;
    dob: Dob;
    registered: Registered;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
}

export interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}

export interface User {
    results: Result[];
    info: Info;
}