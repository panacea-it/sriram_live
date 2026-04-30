'use client';

import { useMutation, useQuery } from "@tanstack/react-query";
import { authService } from "../services/authService";
import { useAuthStore } from "@/store/authStore";
import type { LoginCredentials, RegisterCredentials } from "../types";

export function useLogin() {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (credentials: LoginCredentials) =>
      authService.login(credentials),
    onSuccess: (data) => {
      setAuth(data.user, data.token);
    },
  });
}

export function useRegister() {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (credentials: RegisterCredentials) =>
      authService.register(credentials),
    onSuccess: (data) => {
      setAuth(data.user, data.token);
    },
  });
}

export function useLogout() {
  const clearAuth = useAuthStore((state) => state.clearAuth);

  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      clearAuth();
    },
  });
}

export function useProfile() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return useQuery({
    queryKey: ["auth", "profile"],
    queryFn: authService.getProfile,
    enabled: isAuthenticated,
  });
}
