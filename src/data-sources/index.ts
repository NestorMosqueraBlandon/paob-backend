import { initMongoose, InitMongooseOptions } from "./mongoose";

export interface InitDataSourcesOptions {
    mongoose?: InitMongooseOptions;
}

export const initDataSources = async (
    {mongoose} : InitDataSourcesOptions
) => {
    if(mongoose){
        await initMongoose(mongoose);
    }
}