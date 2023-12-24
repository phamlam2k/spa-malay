import {
  RegisterPayload,
  ChangePassPayload,
  ConfirmAccountPayload,
  ConfirmOTP,
  ForgotPassword,
  IRegisterResponse,
  LoginPayload,
  ResetOtpPayload,
  ResetPasswordPayload
} from '@/src/types/auth'

import { Response } from '@/src/types/common'
import axiosInstance from '../common/axios'
import { API_BASE_URL } from '../config/endpointApi'

export const registerApi = async (data: RegisterPayload): Promise<IRegisterResponse> => {
  return await axiosInstance.post(`${API_BASE_URL}/auth/register`, data)
}

export const confirmAccountApi = async (data: ConfirmAccountPayload): Promise<Response> => {
  return await axiosInstance.post(`${API_BASE_URL}/auth/active`, data)
}

export const changePassApi = async (data: ChangePassPayload): Promise<Response> => {
  return await axiosInstance.post(`${API_BASE_URL}/auth/resetPassword`, data)
}

export const resetOTPApi = async (data: ResetOtpPayload): Promise<Response> => {
  return await axiosInstance.post(`${API_BASE_URL}/auth/sendOtpForGot`, data)
}

export const loginApi = async (data: LoginPayload): Promise<Response> => {
  return await axiosInstance.post(`${API_BASE_URL}/auth/login`, data)
}

export const refreshTokenApi = async (data: { refreshToken: string }): Promise<Response> => {
  return await axiosInstance.post('/auth/refresh-token', data)
}

export const logoutApi = async (): Promise<Response> => {
  return await axiosInstance.post(`${API_BASE_URL}/auth/logout`)
}

export const logoutAllApi = async (data: any): Promise<Response> => {
  return await axiosInstance.post('/auth/logout-all', data)
}

export const forgotPasswordApi = async (data: ForgotPassword): Promise<Response> => {
  return await axiosInstance.post(`${API_BASE_URL}/auth/sendOtpForGot`, data)
}

export const confirmOTPApi = async (data: ConfirmOTP): Promise<Response> => {
  return await axiosInstance.post(`${API_BASE_URL}/auth/verifyOtpForGot`, data)
}

export const resetPasswordApi = async (data: ResetPasswordPayload): Promise<Response> => {
  return await axiosInstance.post(`${API_BASE_URL}/auth/forgotPassword`, data)
}

export const getUserInfoUnAuth = async (data: ForgotPassword): Promise<Response> => {
  return await axiosInstance.get(`${API_BASE_URL}/auth/info-unauthorized?email=${data.email}`)
}
