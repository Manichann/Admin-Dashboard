import { string, object } from "yup";

export interface AddUser {
    id: string
    username: string
    email: string
    role: string
    password: string
}

export const addUser = object({
    id: string().required().max(10),
    username: string().required().min(3).max(30),
    email: string().email().required(),
    role: string().required(),
    password: string().required().min(8),
    
})