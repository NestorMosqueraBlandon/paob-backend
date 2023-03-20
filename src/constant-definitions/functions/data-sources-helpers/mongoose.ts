import { model, Model, Schema } from "mongoose"
import { Collection } from "./constants"

export const getModel = <T>(CollectionName: Collection, schema: Schema): Model<T> => {
    return model<T>(CollectionName, schema)
}