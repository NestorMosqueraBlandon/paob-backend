import { Schema } from "mongoose";
import { Note } from "./note";
import crypto from "crypto";
import { StatusType } from "types/common";

export const NoteSchemaMongo = new Schema<Note>(
  {
    _id: {
      type: String,
      default: crypto.randomUUID(),
      required: true,
      unique: true,
    },
    user: { type: String, ref: 'users' },
    title: { type: String },
    text: { type: String },
    completed: { type: Boolean, default: false },
    status: {type: String, default: StatusType.ACTIVE}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

NoteSchemaMongo.index({title: 'text'})
NoteSchemaMongo.methods.toJSON = function () {
  const { _id, ...user } = this.toObject();
  user.uuid = _id;
  return user;
};
