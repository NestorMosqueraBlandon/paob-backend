import { StatusType } from "types/common";

export interface User {
    _id?: string;
    name: string;
    email: string;
    username: string;
    password: string;
    photo: string;
    status?: StatusType;
    google: boolean;
}