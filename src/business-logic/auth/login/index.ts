import { Collection, getModel } from "constant-definitions";
import { UpdateUserDto, User, UserSchemaMongo } from "types";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

export const login = async ({username, password, code}: UpdateUserDto) => {
    const model = getModel<User>(Collection.USERS, UserSchemaMongo);
    
    const user = await model.findOne({username});
    
    if(!user) throw new Error("Invalid credentials");
    
    if(user.locked) throw new Error("Admin is already locked");
    
    const isValidPassword = await bcrypt.compare(password!, user.password);
    
    if(!isValidPassword) {
        user.login_attempts += 1;
        await user.save();
        
        if(user.login_attempts >= 3){
            user.locked = true;
            await user.save();
            throw new Error('Too many login attempts, your account is already locked');
        }
        
        throw new Error("Invalid credentials");
    }
    
    if(user.two_factor_auth){
        if(!code){
            throw new Error('Authentication code must be provided for login');
        }
        
        const verified = false;
    }
    
    user.login_attempts = 0;
    await user.save();
    
    const token = jwt.sign({
        uuid: user.uuid,
    }, JWT_SECRET!, {expiresIn: '24h'});
    
    return {token};
}