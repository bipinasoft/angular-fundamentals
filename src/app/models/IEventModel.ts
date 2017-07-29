import { ISessionModel } from './ISessionModel';

export interface IEventModel {
    id: number;
    name: string;
    date: string;
    time: string;
    price: number;
    locationId: number;
    imageUrl: string;
    onlineUrl?: string;
    sessions: ISessionModel[];
    location?: {
        id: number,
        address: string;
        city: string;
        country: string;
    }
}
