import { object, string } from 'yup'

export interface ProfileForm {  
  username: string
  email: string
  role: string
  image?:File
}

export const editForm = object({
  username: string().required().min(3),
  email:string().required().email(),
  role:string().required(),
})
