import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState } from "react";

export async function getHeaders(data) {
  let userData = await AsyncStorage.getItem("userData");
  // console.log(userData, "userdataaaaaa");
  // console.log(!!Object.keys(data).length,"datatttttt")
 if (!!Object.keys(data).length) {
  if (userData) {
    userData = JSON.parse(userData);
    return {
      authorization: `Bearer ${userData?.token}`,
    };
  }else{
    return{}
  }
 }
  return {};
}

export async function apiReq(
  endPoint,
  data,
  method,
  headers,
  requestOptions = {}
) {
  console.log(endPoint, "endPoint");
  return new Promise(async (res, rej) => {
    const getTokenHeader = await getHeaders(data);

    headers = {
      ...getTokenHeader,
      ...headers,
    };
   
    // console.log(data, "datadatadata")
    if (method === "get" || method === "delete") {
      data = {
        ...requestOptions,
        ...data,
        headers,
      };
    }
    console.log("check data in api generator>>>",headers);

    axios[method](endPoint, data,{headers})// 
      .then((result) => {
        const { data } = result;

        if (data.status === false) {
          return rej(data);
        }

        return res(data);
      })
      .catch((error) => {
        if (error && error.response && error.response.status === 401) {
          return rej(error);
        }
        if (error && error.response && error.response.data) {
          if (!error.response.data.error) {
            return rej({
              ...error.response.data,
              error: error.response.data.error || "Network Error",
            });
          }
          return rej(error.response.data);
        } else {
          return rej({ error: "Network Error", message: "Network Error" });
        }
      });
  });
}

export function apiPost(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "post", headers);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "delete", headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
  return apiReq(endPoint, data, "get", headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "put", headers);
}

export function setUserData(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem("userData", data);
}

//Save wallet info

export function setWalletData(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem("walletData", data);
}

export function setAppData(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem("appData", data);
}

export function saveUserAddress(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem("saveUserAddress", data);
}

export function saveSelectedAddress(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem("saveSelectedAddress", data);
}

export function saveShortCodeData(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem("saveShortCode", data);
}

export function setItem(key, data) {
  // console.log(data,"data111++++++");
  data = JSON.stringify(data);
  return AsyncStorage.setItem(key, data);
}

export function getItem(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key).then((data) => {
      resolve(JSON.parse(data));
    });
  });
}

export function removeItem(key) {
  console.log(key, "remove key");
  return AsyncStorage.removeItem(key);
}

export function clearAsyncStorate(key) {
  return AsyncStorage.clear();
}

export async function getUserData() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("userData").then((data) => {
      resolve(JSON.parse(data));
    });
  });
}

export async function getAppData() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("appData").then((data) => {
      resolve(JSON.parse(data));
    });
  });
}

export async function clearUserData() {
  return AsyncStorage.removeItem("userData");
}

export function numberWithCommas(x) {
  const fixedDecimal = x.toFixed(2);
  const currency = fixedDecimal
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // console.log(currency, "value of x is");
  return currency;
}

export function currencyWithCommasAndTofixed(x, fixValue) {
  const fixedDecimal = x.toFixed(fixValue);
  const currency = fixedDecimal
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return currency;
}
// //................................set user login.................
export async function setLogin(data) {
  data = JSON.stringify(data);
  console.log(data,"dataaaaaaaaa");
  return AsyncStorage.setItem('userData', data);
}
// //................get user login................
export async function getLogin() {
  try {
    const userData = await AsyncStorage.getItem('userData')
    return userData != null ? JSON.parse(userData) : null;
  } catch (e) {
    console.log("user_data get error")
  }
}