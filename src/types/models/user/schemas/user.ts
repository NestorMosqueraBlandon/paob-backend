import { StatusType } from "types/common";

export interface User {
    _id?: string;
    uuid?: string;
    name: string;
    email: string;
    username: string;
    password: string;
    photo: string;
    code: number;
    status?: StatusType;
    google: boolean;
    login_attempts: number;
    two_factor_auth: boolean;
    locked: boolean;
    start_date: string;
    last_login: string;
    createdAt:string;
    updatedAt:string;
}