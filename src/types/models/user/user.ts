import { StatusType } from "types/common";

export interface User {
    _id?: string;
    name: string;
    username: string;
    password: string;
    state?: StatusType;
}