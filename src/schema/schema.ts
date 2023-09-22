import { object, string } from 'yup'

export interface LoginForm{
    username: string
    password: string
    email: string
}

export const loginForm = object({
    username:string().required().min(3),
    password:string().required().min(8),
    email:string().email().required()
})