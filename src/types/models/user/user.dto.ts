import { User } from "./schemas";

export type CreateUserDto = Omit<User, "_id">
export type UpdateUserDto = Partial<User>

