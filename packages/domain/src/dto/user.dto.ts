import type { IUser } from "../entity/user.js"


export interface UserDto extends Omit<IUser, "password"> { }
export interface UserCreateDto extends Omit<IUser, "id"> { }


