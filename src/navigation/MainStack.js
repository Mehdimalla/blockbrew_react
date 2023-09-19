//import liraries
import React from "react";
import {
  AccountSettings,
  AddBankAccount,
  AddFunds,
  BuyScreen,
  CaptureSelfie,
  ChangeCurrency,
  ChangeLanguage,
  ChangePassword,
  CheckScreen,
  CreatePriceAlert,
  GoogleAuthenticator,
  HelpAndSupport,
  Notifications,
  OrderDetails,
  OtpVeification,
  OtpVerification,
  PanDetails,
  Payment,
  PriceAlerts,
  // PriceCandleChart,
  PriceChartDetails,
  Security,
  SetPin,
  UpdateProfile,
  VerifyAadhar,
} from "../Screens";
import BottomTabNavigation from "./BottomTabNavigation";
import navigationStrings from "./navigationStrings";

// create a component
const MainStack = (Stack) => {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.BOTTOM_TAB_NAVIGATOR}
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.ORDERS_DETAILS}
        component={OrderDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.ACCOUNT_SETTINGS}
        component={AccountSettings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.SECURITY}
        component={Security}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.PRICE_ALERTS}
        component={PriceAlerts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.HELP_AND_SUPPORT}
        component={HelpAndSupport}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.CHANGE_LANGUAGE}
        component={ChangeLanguage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.CHANGE_CURRENCY}
        component={ChangeCurrency}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={navigationStrings.PAN_DETAILS}
        component={PanDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.VERIFY_AADHAR}
        component={VerifyAadhar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.ADD_BANK_ACCOUNT}
        component={AddBankAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.CHANGE_PASSWORD}
        component={ChangePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.GOOGLE_AUTHENTICATOR}
        component={GoogleAuthenticator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.PRICE_CHART_DETAILS}
        component={PriceChartDetails}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={navigationStrings.SET_PIN}
        component={SetPin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.CAPTURE_SELFIE}
        component={CaptureSelfie}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.BUY_SCREEN}
        component={BuyScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.ADD_FUNDS}
        component={AddFunds}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.UPDATE_PROFILE}
        component={UpdateProfile}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={navigationStrings.OTP_VERIFICATION}
        component={OtpVerification}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={navigationStrings.PAYMENT}
        options={{ headerShown: false }}
        component={Payment} />
      <Stack.Screen
        name={navigationStrings.NOTIFICATIONS}
        component={Notifications}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name={navigationStrings.PRICE_CANDLE_CHART}
        component={PriceCandleChart}
        options={{ headerShown: false }}
      /> */}
    </>
  );
};
export default MainStack;
