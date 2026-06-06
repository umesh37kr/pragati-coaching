import axios from "axios";

export interface LoginPayload {
  email: string;
  password: string;
}

export const loginUser = async (payload: LoginPayload) => {
  const response = await axios.post("/auth/login", payload);

  return response.data;
};
