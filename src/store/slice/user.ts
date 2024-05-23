import { createSlice } from "@reduxjs/toolkit";
import { ICurrentUser } from "../../types";
import { fetchCurrentUser } from "../asyncthunk/user";

interface IInitialState {
  user: ICurrentUser;
  loading: boolean;
  errorMessage: string;
}

const initialState: IInitialState = {
  user: { sub: "", username: "", email: "", phone: "" },
  loading: false,
  errorMessage: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchCurrentUser.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.message as string;
    });
  },
});

export default userSlice.reducer;
