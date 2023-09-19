import {
  HOME_DATA,
  TIME_ZONE,
  WATCHLIST_GET,
  WATCHLIST_POST,
  COINS_GRAPH_API,
  GET_COINS_LIST,
  ORDERS,
  CREATE_PIN,
  RESET_PIN,
  BUY_COIN,
  ADD_BANK_ACCOUNT,
  SEND_TRANSACTION_OTP,
  NOTIFICATIONS,
  VERIFY_DEPOSIT_TRANSACTION,
  LIST_PRICE_ALERT,
  DELETE_PRICE_ALERT,
  CREATE_PRICE_ALERT,

} from "../../config/url";

import { apiGet, apiPost } from "../../utils/utils";
import { store } from "../store";

const { dispatch } = store;

export const GetCoinsData = (query = "", isGuest) => {
  return apiGet(GET_COINS_LIST + query, isGuest);
};

export const GetCoinsGraph = (
  query = "bitcoin/market_chart?vs_currency=usd&days=7",
  isGuest
) => {
  return apiGet(COINS_GRAPH_API + query, isGuest);
};
export const timeZone = () => {
  return apiGet(TIME_ZONE);
};

export const homeData = (query = "", isGuest) => {
  return apiGet(HOME_DATA + query, isGuest);
}

export const postwatchList = () => {
  console.log(query, "query+++");
  return new Promise((resolve, reject) => {
    apiPost(WATCHLIST_POST + query)
      .then((res) => {
        console.log(res, "res+++");
        resolve(res);
      })
      .catch((error) => {
        console.log(error, "error occurred");
      });
  });
};
export const getWatchList = () => {
  return apiGet(WATCHLIST_GET);
};

export const ordersList = (query = " ") => {
  return apiPost(ORDERS + query);
};

export const createPin = (data) => {
  return apiPost(CREATE_PIN, data);
};

export const resetPin = (data) => {
  return apiPost(RESET_PIN, data);
};
export const buyCoins = (data) => {
  return apiPost(BUY_COIN, data);
};
export const addBank = (data) => {
  return apiPost(ADD_BANK_ACCOUNT, data)
}

// -------Upadte Profile Action
export const updateProfile = (data, header = {}) => {
  return apiPost(PROFILE_UPDATE, data, header);
};

export const sendOtptransaction = (data) => {
  return apiPost(SEND_TRANSACTION_OTP, data)

}
// -------Notification Action
export const notification = (header = {}) => {
  return apiGet(NOTIFICATIONS, header);
};

export const verifyDeposit = (data) => {
  return apiPost(VERIFY_DEPOSIT_TRANSACTION, data)
}

// -------Price Alert Actions
export const CreatePriceAlert = (data, header = {}) => {
  return apiPost(CREATE_PRICE_ALERT, data, header);
};

export const ListPriceAlert = (data, header = {}) => {
  return apiGet(LIST_PRICE_ALERT, data, header);
};

export const DeletePriceAlert = (data, header = {}) => {
  return apiPost(DELETE_PRICE_ALERT, data, header);
};

