import { Schema } from "mongoose";
import { User } from "./user";

export const UserSchemaMongo = new Schema<User>({
    uuid: {type: String, required: true},
    username: {type: String},
    password: {type: String},  
    roles: [{
        type: String,
    }]
}, {
    versionKey: false,
    timestamps: true
});