import { Schema } from "mongoose";
import { Note } from "./note";

export const NoteSchemaMongo = new Schema<Note>(
  {
    _id: {
      type: String,
      default: crypto.randomUUID(),
      required: true,
      unique: true,
    },
    user: { type: String },
    title: { type: String },
    text: { type: String },
    completed: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

NoteSchemaMongo.methods.toJSON = function () {
  const { _id, ...user } = this.toObject();
  user.uuid = _id;
  return user;
};
