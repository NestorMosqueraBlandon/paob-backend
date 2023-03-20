import { Schema } from "mongoose";
import { User } from "./user";
import crypto from "crypto";

export const UserSchemaMongo = new Schema<User>({
    _id: {
        type: String,
        default: crypto.randomUUID(),
        required: true,
        unique: true,
      },
    username: {type: String},
    password: {type: String},  
}, {
    versionKey: false,
    timestamps: true
});

UserSchemaMongo.methods.toJSON = function () {
    const { _id, ...user } = this.toObject();
    user.uuid = _id;
    return user;
  };
  