import api from "@/lib/axios";
import axios from "axios";

interface ApiErrorResponse {
  success?: boolean;
  message?: string;
}

export class AuthServiceError extends Error {
  status?: number;
  data?: ApiErrorResponse;

  constructor(message: string, status?: number, data?: ApiErrorResponse) {
    super(message);
    this.name = "AuthServiceError";
    this.status = status;
    this.data = data;
  }
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

const toAuthServiceError = (error: unknown, fallbackMessage: string) => {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const message = error.response?.data?.message || fallbackMessage;

    return new AuthServiceError(
      message,
      error.response?.status,
      error.response?.data,
    );
  }

  if (error instanceof Error) {
    return new AuthServiceError(error.message || fallbackMessage);
  }

  return new AuthServiceError(fallbackMessage);
};

export const getAuthErrorMessage = (
  error: unknown,
  fallbackMessage = "Something went wrong",
) => {
  if (error instanceof AuthServiceError) {
    return error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallbackMessage;
};

export const loginUser = async (payload: LoginPayload) => {
  try {
    const response = await api.post("/auth/login", payload);
    return response.data;
  } catch (error) {
    throw toAuthServiceError(error, "Login failed");
  }
};

export const registerUser = async (payload: RegisterPayload) => {
  try {
    const response = await api.post("/auth/register", payload);
    return response.data;
  } catch (error) {
    throw toAuthServiceError(error, "Registration failed");
  }
};

// export const loginUser = async (email: string, password: string) => {
//   const response = await api.post("/auth/login", {
//     email,
//     password,
//   });

//   return response.data;
// };

export const logoutUser = async () => {
  const response = await api.post("/auth/logout");

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");

  return response.data;
};
