export const API_BASE_URL = "https://mobile-exchange.netsolutionindia.com/api/";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
export const HOME_DATA = getApiUrl("get-home-data?");
// Get API
export const GET_COINS_LIST = getApiUrl("get-coin-list?");
export const COINS_ALL_ASSETS =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
export const COINS_GRAPH_API = "https://api.coingecko.com/api/v3/coins/";
export const TIME_ZONE = "https://api.binance.com/api/v3/exchangeInfo";
export const WATCHLIST_POST = getApiUrl("add-to-watchlist?");
export const WATCHLIST_GET = getApiUrl("get-watchlist");
export const SOCIAL_LOGIN = getApiUrl("social-login?");
export const PHONE_EMAIL_OTP = getApiUrl("verify-email-and-phone");
export const LOGOUT_API = getApiUrl("logout");
export const NOTIFICATIONS = getApiUrl("get-notification-listing");
export const DISABLE_ACCOUNT = getApiUrl("disable");
export const LIST_PRICE_ALERT = getApiUrl("price-alerts-listing");

// Post APi
export const REGISTER_POST = getApiUrl("register");
export const ADD_PHONE_NUMBER = getApiUrl("add-phone-number");
export const LOGIN = getApiUrl("login");
export const FORGET_PASSWORD = getApiUrl("forget-password?");
export const ORDERS = getApiUrl("buy-coin?");
export const CHANGE_PASSWORD = getApiUrl("change-password");
export const RESEND_CODE = getApiUrl("resend-otp");
export const CREATE_PIN = getApiUrl("create-pin?");
export const RESET_PIN = getApiUrl("reset-pin?");
export const PROFILE_UPDATE = getApiUrl("profile-update");
export const SEND_TRANSACTION_OTP = getApiUrl("send-transaction-otp")
export const VERIFY_DEPOSIT_TRANSACTION = getApiUrl("verify-deposit-transaction")

export const BUY_COIN = getApiUrl("buy-coin");
export const ADD_BANK_ACCOUNT = getApiUrl("add-bank-account");
export const CREATE_PRICE_ALERT = getApiUrl("create-price-alert");
export const DELETE_PRICE_ALERT = getApiUrl("delete-price-alert");
