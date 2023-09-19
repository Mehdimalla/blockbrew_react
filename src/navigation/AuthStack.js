import React from "react";
// import { ForgetPassword, Login, LoginScreen, PhoneLogin, Signup } from "../Screens";

import {
  AddPhoneNo,
  ForgetPassword,
  Login,
  LoginScreen,
  OtpVerification,
  Signup,
} from "../Screens";
import navigationStrings from "./navigationStrings";

// create a component
const AuthStack = (Stack) => {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.LOGIN_SCREEN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.SIGNUP}
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.OTP_VERIFICATION}
        component={OtpVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.FORGET_PASSWORD}
        component={ForgetPassword}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={navigationStrings.ADD_PHONE_NO}
        component={AddPhoneNo}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name={navigationStrings.PHONE_LOGIN}
        component={PhoneLogin}
        options={{ headerShown: false }}
      /> */}
    </>
  );
};

//make this component available to the app
export default AuthStack;
