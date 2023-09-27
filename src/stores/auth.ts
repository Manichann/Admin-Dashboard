import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { users, type User } from '../data/user'
import { useRoute, useRouter } from 'vue-router'
import { RouteName } from '@/router/route-name.enum'

export interface authState {
  isLoading: boolean
  data: Partial<User>
  error: string
}

export interface LoginForm {
  username: string
  password: string
}

export interface ResetPassword {
  password: string
  newPassword: string
}

export interface ForgotPassword {
  email: string
}

export interface AddUser {
  id: string
  username: string
  email: string
  role: string
  password: string
}
export interface EditUser {
  id: string
  username: string
  email: string
  role: string
  password: string
}

export const authStore = defineStore('auth-store', () => {
  const { push } = useRouter()
  const authState = reactive<authState>({
    isLoading: false,
    data: {},
    error: ''
  })

  function login(form: LoginForm) {
    authState.isLoading = true
    const user = users.find(
      (user) => user.username === form.username && user.password === form.password
    )

    if (!user) {
      authState.error = 'Warning: Invalid Information!'
      return
    }

    localStorage.setItem(
      'user',
      JSON.stringify({
        sub: user.id,
        username: user.username
      })
    )
    authState.data = user
    authState.isLoading = false

    push({ name: 'dashboard' })
  }

  function forgot(form: ForgotPassword) {
    authState.isLoading = true
    const email = users.find((email) => email.email === form.email)

    if (!email) {
      authState.error = 'Warning: Invalid Emaill address!'
      return
    }

    authState.data = email
    authState.isLoading = false

    push({ name: RouteName.ResetPassword, query: { token: email.email } })
  }

  function edit(form: EditUser) {
    authState.isLoading = true
    const user = users.find((user) => user.id === form.id)
    if(!user){
      authState.error = 'not found user'
      return
    }
    
    user.username = form.username
    user.role = form.role
    user.email = form.email
    user.password = form.password
    authState.isLoading = false
  }

  function reset(token: string, form: ResetPassword) {
    authState.isLoading = true
    const user = users.find((user) => user.email === token)
    if (!user) {
      authState.error = 'not found user'
      return
    }

    user.password = form.newPassword
    authState.isLoading = false

    push({ name: RouteName.Login })
  }

  function getAuth(): void {
    const token = localStorage.getItem('user')

    if (!token) {
      authState.error = 'not found token'
      return
    }

    const payload = JSON.parse(token)
    const user = users.find((item) => item.id === payload.sub)
    if (!user) {
      authState.error = 'not found user'
      return
    }

    authState.data = user
    authState.isLoading = false
  }
  return { authState, login, getAuth, forgot, reset, edit }
})
