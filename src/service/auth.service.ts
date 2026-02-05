import axiosInstance from "@/lib/axios";
import { AuthResponse, AuthRequest, RegisterRequest } from "@/types/blog";

export const authService = {
  login: async (data: AuthRequest): Promise<AuthResponse> => {
    const res = await axiosInstance.post<AuthResponse>("/auth/login", data);
    return res.data;
  },

  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const res = await axiosInstance.post<AuthResponse>("/auth/register", data);
    return res.data;
  },

  // Ambil data user proses login
  getMyProfile: async () => {
    const res = await axiosInstance.get("/users/me");
    return res.data;
  },

  // Update Nama & Headline 
  updateProfile: async (data: { name: string; headline: string }) => {
    const res = await axiosInstance.patch("/users/me", data);
    return res.data;
  },

  changePassword: async (data: { currentPassword: string; newPassword: string; confirmPassword: string }) => {
    // data harus terisi: { currentPassword, newPassword, confirmPassword }
    const response = await axiosInstance.patch("/users/password", data);
    return response.data;
  },
};
