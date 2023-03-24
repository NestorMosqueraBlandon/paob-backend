import { Schema } from "mongoose";
import { User } from "./user";
import crypto from "crypto";
import { StatusType } from "types/common";

export const UserSchemaMongo = new Schema<User>({
    _id: { type: String, default: crypto.randomUUID(), required: true, unique: true},
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    password: {type: String},  
    google: {type: Boolean},
    status: {type: String, default: StatusType.ACTIVE},
    code: { type: Number, required: false },
    login_attempts: {type: Number, default: 0},
    two_factor_auth: {type: Boolean, default: false},
    locked: {type: Boolean, default: false},
    start_date: { type: String },
    last_login: { type: String }
}, {
    versionKey: false,
    timestamps: true
});

UserSchemaMongo.methods.toJSON = function () {
    const { _id, ...user } = this.toObject();
    user.uuid = _id;
    return user;
  };
  