interface Horse {
    trainer: Trainer;
    pedigree: Pedigree;

}
interface Father {
    id: number;
    name: string;
    nationality: string;
}

interface Mother {
    id: number;
    name: string;
    nationality: string;
}

interface Grandfather {
    id: number;
    name: string;
    nationality: string;
}
interface Pedigree {
    father: Father;
    mother: Mother;
    grandfather: Grandfather;
}

interface Trainer {
    id: number;
    firstName: string;
    lastName: string;
    shortName: string;
    location: string;
    birth: number;
}

export interface HorseDetailsType {
    horseInfo:Horse
}