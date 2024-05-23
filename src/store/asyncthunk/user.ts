import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser } from "../../lib/API/call/auth";

export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async (_, thunkApi) => {
    try {
      const res = await getCurrentUser();
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
