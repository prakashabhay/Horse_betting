export interface Track {
    id: number;
    name: string;
    condition: string;
    countryCode: string;
}
export interface RaceProducts {
    id: string;
    tracks: Track[];
    totalToWin: number;
    startTime: string;
    addOns: string[];
}
export interface Result {
    number: number;
    postPosition: number;
    distance: number;
    horse: Horse;
    driver: Driver;
    key: number;
    driverName: string;
}

export interface Race {
    id: string;
    name: string;
    date: string;
    number: number;
    distance: number;
    startMethod: string;
    startTime: string;
    scheduledStartTime: string;
    prize: string;
    terms: string[];
    sport: string;
    track: Track;
    status: string;
    mediaId: string;
    starts:Result[]
}

export interface RaceProps {
    id: string;
    status: string;
    races: Race[];
    currentVersion: number;
}

export interface Trainer {
    id: number;
    firstName: string;
    lastName: string;
    shortName: string;
    location: string;
    birth: number;
    license: string;
    silks: string;
}

export interface Owner {
    id: number;
    name: string;
    location: string;
}

export interface Breeder {
    id: number;
    name: string;
    location: string;
}

export interface Father {
    id: number;
    name: string;
    nationality: string;
}

export interface Mother {
    id: number;
    name: string;
    nationality: string;
}

export interface Grandfather {
    id: number;
    name: string;
    nationality: string;
}

export interface Pedigree {
    father: Father;
    mother: Mother;
    grandfather: Grandfather;
}

export interface Horse {
    id: number;
    name: string;
    age: number;
    sex: string;
    trainer: Trainer;
    money: number;
    color: string;
    owner: Owner;
    breeder: Breeder;
    pedigree: Pedigree;
    nationality: string;
    foreignOwned?: boolean;
}
export interface Driver {
    id: number;
    firstName: string;
    lastName: string;
    shortName: string;
    location: string;
    birth: number;
    license: string;
    silks: string;
}


