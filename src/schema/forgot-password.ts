import { object, string } from 'yup'

export interface ForgotPasswordForm {
  email: string
}

export const forgotPasswordForm = object({
  email: string().required().email()
})
