import API from "..";
import { IRegisterBody } from "../../../types";

export const registerUser = async (body: IRegisterBody) => {
  return await API.post("/users", body)
}