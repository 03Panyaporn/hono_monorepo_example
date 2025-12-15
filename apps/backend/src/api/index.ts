import {Hono} from "hono"
import {UserService} from "../services/user.js"
import {UserRepositorySqlite} from "../repository/sqlite/user.js"
import {CreateUserRequest} from "@repo/domain/request/user.js";
import {zValidator} from "@hono/zod-validator"
import type {UserCreateDto} from "@repo/domain/dto/user.dto.js";

const api = new Hono()

let userService = new UserService(new UserRepositorySqlite());

api.get('/users', (c) => {

    let data = userService.findAllUser();
    return c.json({ "message": "Get User List", data: data })
})
let createUserRequest = CreateUserRequest.extend({}).refine((data) => data.password === data.password_confirmation, {
    error: "Passwords do not match",
    path : ["password"],
})
api.post('/users',zValidator("json",createUserRequest, (result, c) => {
        if (!result.success) {
            return c.json({ error: result.error.issues }, 400)
        }
    })
, async (c)=>{

    const data = c.req.valid("json")
    const dto : UserCreateDto = {
        email : data.email,
        password : data.password,
        username : data.username,
    }
    let result =await userService.create(dto);

    return c.json({
        message : "User Created",
        data : result
    })
})



export default api