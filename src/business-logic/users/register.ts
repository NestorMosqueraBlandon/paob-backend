import { Collection, getModel } from "constant-definitions";
import { CreateUserDto, User, UserSchemaMongo } from "types";
import bcrypt from 'bcrypt';

export const registerUser = async (data: CreateUserDto): Promise<User | Error> => {
    const model = getModel<User>(Collection.USERS, UserSchemaMongo);
    
    const {name, username, email, password} = data;
    
    const existEmail = await model.findOne({email});
    if(existEmail){
        throw new Error('Email already exists')
    }
    
    const existUsername = await model.findOne({username});
    if(existUsername){
        throw new Error('Username already exists')
    }
    
    const user = new model({name, username, email, password});
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);

    await user.save();
    
    return user;
}