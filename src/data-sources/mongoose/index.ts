import mongoose from 'mongoose';

const {MONGO_URL} = process.env;

export interface InitMongooseOptions {
    mongoUrl?: string;
}

export const initMongoose = async ({mongoUrl}: InitMongooseOptions) => {
    const connection = mongoose.connection;

    const connectionUrl = MONGO_URL || mongoUrl || '';

    connection.on('error', (error:any) => {
        console.error(`Error in MMongoose connection: ${JSON.stringify(error)}`)
        throw new Error(error);
    });

    connection.on('connected', () => {
        console.info(`Mongoose: Connected to ${connectionUrl}`);
      });
    
      connection.on('reconnectFailed', () => {
        console.error('Mongoose: DB Connection Lost, retries failed');
      });

      await mongoose.connect(connectionUrl, {
          autoIndex: true,
      });
}