import { string, object } from "yup";

export interface EditUser {
    username: string
    email: string
    role: string
    password: string
}

export const editUser = object({
    username: string().required().min(3).max(30),
    email: string().email().required(),
    role: string().required(),
    password: string().required().min(8),
    
})