import type { IUser } from "../entity/user.js"


export interface IUserRepository {

    // Read
    findAll(): Promise<IUser[]>
    findById(id: number): Promise<IUser | null>

    // Create
    create(user: IUser): Promise<Partial<IUser>>

    // Update
    update(id: number, user: Partial<IUser>): Promise<IUser>

    // Delete
    delete(id: number): Promise<boolean>

}