import apiClient from "@/services/apiClient";
import type { AuthResponse, LoginCredentials, RegisterCredentials } from "../types";

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>(
      "/auth/login",
      credentials,
    );
    return response.data;
  },

  register: async (
    credentials: RegisterCredentials,
  ): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>(
      "/auth/register",
      credentials,
    );
    return response.data;
  },

  logout: async (): Promise<void> => {
    await apiClient.post("/auth/logout");
  },

  getProfile: async (): Promise<AuthResponse["user"]> => {
    const response = await apiClient.get<AuthResponse["user"]>(
      "/auth/profile",
    );
    return response.data;
  },
};
