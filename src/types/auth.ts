export interface InputProps {
  label: string
  register: any
  errors: any
  type: string
  name: string
  value?: any
  onChange?: any
  disabled?: any
}

export interface RegisterPayload {
  fullName: string
  email: string
  password: string
  color?: string
}

export interface ConfirmAccountPayload {
  email: string
  otp: string
}

export interface ChangePassPayload {
  email: string
  password: string
  newPassword: string
}

export interface ResetOtpPayload {
  email: string
}

export interface LoginPayload {
  account: string
  password: string
}

export interface ForgotPassword {
  email: string
}

export interface ConfirmOTP {
  email: string
  otp: string
}

export interface ResetPasswordPayload {
  password: string
  email: string
  otp: string
}

export interface LoginResponse {
  accessToken: string
  refreshToken: string
}

export interface IUserInfo {
  _id: string
  iat: number
  exp: number
}

export interface User {
  id: string
  color: string
  email: string
  username: string
  phone: string
  fullName: string
  status: string
  roles: string
  avatarUrl: string
  coverUrl: string
  layoutMode: string
}

export interface IRegisterResponse {
  data: {
    avatarUrl: string | null
    coverUrl: string | null
    email: string
    fullName: string
    id: string
    layoutMode: string
    phone: string | null
    roles: string
    status: string
    username: string
    color: string
  }
  message: string
  statusCode: number
}

export interface IResponseAPIDefautlt {
  statusCode: string | number
  message: string
  status: number
}

export interface IResponseAPIVerifyOTP extends IResponseAPIDefautlt {
  metadata: { email: string; otp: string }
}
