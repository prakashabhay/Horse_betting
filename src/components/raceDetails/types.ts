import {Driver,Horse} from '../../types'
export interface Result {
    number: number;
    postPosition: number;
    distance: number;
    horse: Horse;
    driver: Driver;
    key: number;
    driverName: string;
}

export interface Props{
    starts:Result[]
}