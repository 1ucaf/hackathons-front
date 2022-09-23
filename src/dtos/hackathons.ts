export interface IMiniHackathon {
    id: IId,
    place: ILocation,
    date: Date|string,
    name: string,
}

export interface ILocation {
    street: IStreet;
    city: string;
    state: string;
    country: string;
    postcode: string|number;
    coordinates: ICoordinates;
    timezone: ITimezone;
}

export interface IId {
    name: string;
    value: string;
}

export interface IStreet {
    number: number;
    name: string;
}

export interface ICoordinates {
    latitude: string;
    longitude: string;
}

export interface ITimezone {
    offset: string;
    description: string;
}