import API from "..";
import { ILoginBody, IRegisterBody } from "../../../types";

export const registerUser = async (body: IRegisterBody) => {
  return await API.post("/users", body)
}

export const login = async (body: ILoginBody) => {
  return await API.post("/auth/login", body)
}

export const getCurrentUser = async () => {
  return await API.get("/auth/profile", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })
}

export const setAuthToken = (token?: string) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
}