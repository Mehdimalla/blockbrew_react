import {
  CHANGE_PASSWORD,
  PHONE_EMAIL_OTP,
  SOCIAL_LOGIN,
  REGISTER_POST,
  ADD_PHONE_NUMBER,
  LOGIN,
  FORGET_PASSWORD,
  LOGOUT_API,
  RESEND_CODE,
} from "../../config/url";
import { apiGet, apiPost, setItem } from "../../utils/utils";
import strings from "../../constants/lang";
import { guestLogin, login, logout } from "../reducers/authReducer";
import { store } from "../store";
import { showSuccessMsg } from "../../utils/helperFunction";
import { Alert } from "react-native";

const { dispatch } = store;

export const loginAction = (data) => {
  console.log(data, "dataaaaa>>>>>>>");
  setItem("userData", data);
  dispatch(login(data));
};

export const guestLoginAction = (data) => {
  console.log(data, "guestLoginStatus");
  dispatch(guestLogin(data));
};

export const logoutAction = (header = {}) => {
  return new Promise((resolve, reject) => {
    apiGet(LOGOUT_API, header)
      .then((res) => {
        console.log(res, "res>>>>");
        if (res?.status === 200) {
          dispatch(logout());
          showSuccessMsg(strings.LOGOUT_SUCESSFULLY);
          Alert.alert(strings.LOGOUT_SUCESSFULLY);
          resolve(res);
        }
      })
      .catch((error) => {
        console.log(error, reject, "error occured during logout");
      });
  });
};

export const socialLogin = (data) => {
  return new Promise((resolve, reject) => {
    apiPost(SOCIAL_LOGIN, data)
      .then((res) => {
        console.log(res, "res>>>>");
        resolve(res);
      })
      .catch((error) => {
        console.log(error, reject, "error occured during social login");
      });
  });
};

export const SignupAction = (data) => {
  return apiPost(REGISTER_POST, data);
};

export const AddPhoneNumber = (data) => {
  return new Promise((resolve, reject) => {
    apiPost(ADD_PHONE_NUMBER, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

export const phoneEmailOtp = (data) => {
  // console.log(data, "data passed to phoneEmailOtp Action");
  return new Promise((resolve, reject) => {
    apiPost(PHONE_EMAIL_OTP, data)
      .then((res) => {
        resolve(res);
        console.log(res, "otp verification response");
        res?.status === 400 ? alert(strings?.INCORRECT_OTP) : null;
        // if (res?.status === 200) {
        //   // loginAction(res?.data);
        //   // alert(strings?.OTP_VERIFIED);
        // } else {
        //   null;
        // }
      })
      .catch((error) => {
        console.log(error, reject, "error occured during otp verification");
      });
  });
};

export const LoginData = (data) => {
  return new Promise((resolve, reject) => {
    apiPost(LOGIN, data)
      .then((res) => {
        resolve(res);
        if (res?.status == 200) {
          loginAction(res?.data);
        }
      })
      .catch((err) => reject(err));
  });
};

export const forgetPassword = (data) => {
  return new Promise((resolve, reject) => {
    apiPost(FORGET_PASSWORD, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

// change password
export const changePassword = (data) => {
  return new Promise((resolve, reject) => {
    apiPost(CHANGE_PASSWORD, data).then((res) => {
      resolve(res)
    }).catch(err => reject(err))
  })

}

export const resendCode = (data) => {
  return new Promise((resolve, reject) => {
    apiPost(RESEND_CODE, data)
      .then((res) => {
        console.log(res, "ress");
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};
