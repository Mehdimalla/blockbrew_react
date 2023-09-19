import { createSlice } from "@reduxjs/toolkit";
import { removeItem, setItem } from "../../utils/utils";

const initialState = {
  userLoginStatus: false,
  guestLogin: false,
};

export const authReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    guestLogin: (state, data) => {
      state.guestLogin = data?.payload;
    },
    // logoutGuest: (state) => {
    //   state.guestLogin = false;
    // },
    login: (state, data) => {
      console.log(data, "loginReducer");
      state.userLoginStatus = data?.payload;
    },
    logout: (state) => {
      state.guestLogin = undefined;
      state.userLoginStatus = undefined;
      removeItem("userData");
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, guestLogin } = authReducer.actions;

export default authReducer.reducer;
