import { showMessage } from "react-native-flash-message";

// ------------flash messages
export const showDangerMsg = (message) => {
  console.log(message, "THIS IS MESSAGE");
  showMessage({
    type: "danger",
    icon: "danger",
    message,
  });
};

export const showSuccessMsg = (message) => {
  showMessage({
    type: "success",
    icon: "success",
    message,
  });
};

export const showInfoMsg = (message) => {
  showMessage({
    type: "info",
    icon: "info",
    message,
  });
};

export const showWarningMsg = (message) => {
  showMessage({
    type: "warning",
    icon: "warning",
    message,
  });
};
