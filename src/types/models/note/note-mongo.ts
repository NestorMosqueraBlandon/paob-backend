import { Schema } from "mongoose";
import { Note } from "./note";

export const UserSchemaMongo = new Schema<Note>({
    uuid: {type: String, required: true},
    user: {type: String},
    title: {type: String},
    text: {type: String},  
    completed: {type: Boolean, default: false}
}, {
    versionKey: false,
    timestamps: true
});