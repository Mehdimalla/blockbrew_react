//import liraries
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ButtonComponent from "../../../components/ButtonComponent";
import CommonTextInput from "../../../components/CommonTextInput";
import CountryCodePicker from "../../../components/CountryCodePicker";
import GoBackHeader from "../../../components/GoBackHeader";
import WrapperContainer from "../../../components/WrapperContainer";
import strings from "../../../constants/lang";
import navigationStrings from "../../../navigation/navigationStrings";
import actions from "../../../redux/actions";
import colors from "../../../styles/colors";
import commonStyles from "../../../styles/commonStyles";
import { moderateScale, textScale } from "../../../styles/responsiveSize";
import {
  showDangerMsg,
  showSuccessMsg,
  showWarningMsg,
} from "../../../utils/helperFunction";
import validator from "../../../utils/validations";

// create a component
const Signup = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  // console.log(passwordVisible, "password show hide>>>>");
  const [upDateData, setUpdateData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "91",
    countryFlag: "IN",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const {
    firstName,
    lastName,
    phoneNumber,
    countryCode,
    countryFlag,
    email,
    password,
  } = upDateData;
  const updateState = (data) =>
    setUpdateData((state) => ({ ...state, ...data }));
  const onChangeTextResult = (key, value) => {
    // console.log(key, value, "key");
    updateState({ [key]: value });
  };
  const isValidData = () => {
    const error = validator({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    });
    if (error) {
      showWarningMsg(error);
      alert(error);
      return;
    }
    return true;
  };

  const onSingup = useCallback(async () => {
    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }
    let signupApiData = {
      firstname: firstName,
      lastname: lastName,
      country_code: countryCode,
      mobile: phoneNumber,
      email: email,
      password: password,
    };
    // console.log(signupApiData, "signupApiData>>>>>>>>>>>>");
    try {
      await actions.SignupAction(signupApiData).then((res) => {
        // setItem("userData",res?.data)
        console.log(
          res,
          res?.status,
          res?.data?.user_id,
          "Signup api response>>>>"
        );
        if (res?.status === 422) {
          showDangerMsg(strings.EMAIL_ALREADY_TAKEN);
          alert(strings.EMAIL_ALREADY_TAKEN);
        }
        if (res?.status === 200) {
          showSuccessMsg(strings.OTP_SENT);
          alert(strings.OTP_SENT);
          navigation.navigate(navigationStrings.OTP_VERIFICATION, {
            loginType: 1,
            userData: res?.data,
            userId: res?.data?.user_id,
            mobile: res?.data?.mobile,
            email: res?.data?.email,
          });
        }
      });
    } catch (error) {
      console.log(error, "signupAPiFetch error");
    }
  }, [updatveState]);
  return (
    <WrapperContainer>
      <View
        style={{ paddingTop: getStatusBarHeight(true) + moderateScale(15) }}
      >
        <GoBackHeader
          headerTextStyle={{ ...commonStyles.heavy16Black }}
          headerText={strings.CREATE_ACCOUNT}
        />
      </View>

      <ScrollView style={{ ...commonStyles.paddingV20xH10 }}>
        <CommonTextInput
          placeholder={strings.FIRST_NAME}
          textInput={{
            ...styles.textinputStyle,
            ...commonStyles.medium16Black,
          }}
          value={firstName}
          onChangeText={(value) => onChangeTextResult("firstName", value)}
        />
        <CommonTextInput
          placeholder={strings.LAST_NAME}
          textInput={{
            ...styles.textinputStyle,
            ...commonStyles.medium16Black,
          }}
          value={lastName}
          onChangeText={(value) => onChangeTextResult("lastName", value)}
        />
        <CountryCodePicker
          value={phoneNumber}
          countryCode={countryCode}
          countryFlag={countryFlag}
          onSelect={(country) => {
            onChangeTextResult("countryFlag", country.cca2);
            onChangeTextResult("countryCode", country.callingCode[0]);
          }}
          onChangeText={(value) => onChangeTextResult("phoneNumber", value)}
        />
        <CommonTextInput
          placeholder={strings.EMAIL_ID}
          textInput={{
            ...styles.textinputStyle,
            ...commonStyles.medium16Black,
          }}
          value={email}
          onChangeText={(value) => onChangeTextResult("email", value)}
        />
        <CommonTextInput
          placeholder={strings.CREATE_PASSWORD}
          value={password}
          password={true}
          hide={passwordVisible}
          setHide={setPasswordVisible}
          textInput={{
            ...styles.textinputStyle,
            ...commonStyles.medium16Black,
          }}
          onChangeText={(value) => onChangeTextResult("password", value)}
        />
      </ScrollView>
      <KeyboardAvoidingView
        enabled={true}
        // style={{ margin: moderateScale(20) }}
        behavior={Platform.OS == "android" ? "height" : "padding"}
      >
        <ButtonComponent
          onPress={onSingup}
          buttonText={strings.CONTINUE}
          btnStyle={{ ...commonStyles.marginV20xH15 }}
        />
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  textinputStyle: {
    borderColor: colors.lightGreyTxt,
    borderWidth: 0.5,
    paddingVertical: moderateScale(9),
  },
});

//make this component available to the app
export default Signup;
