import { object, string, ref } from 'yup'

export interface ResetPasswordForm {
  password: string,
  newPassword: string
}

export const resetPasswordForm = object({
  password:string().required().min(8),
  newPassword:string().required().oneOf([ref('password')],'Passwords do not match')
})
