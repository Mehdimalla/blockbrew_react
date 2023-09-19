//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ButtonComponent from "../../../components/ButtonComponent";
import CommonTextInput from "../../../components/CommonTextInput";
import GoBackHeader from "../../../components/GoBackHeader";
import WrapperContainer from "../../../components/WrapperContainer";
import strings from "../../../constants/lang";
import navigationStrings from "../../../navigation/navigationStrings";
import actions from "../../../redux/actions";
import colors from "../../../styles/colors";
import commonStyles from "../../../styles/commonStyles";
import { moderateScale } from "../../../styles/responsiveSize";
import { showDangerMsg, showInfoMsg } from "../../../utils/helperFunction";
import validator from "../../../utils/validations";

// create a component
const ForgetPassword = ({ navigation}) => {
  
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);
  const [upDateData, setUpdateData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { email, password, confirmPassword } = upDateData;
  const updateState = (data) =>
    setUpdateData((state) => ({ ...state, ...data }));
  const onChangeTextResult = (key, value) => {
    // console.log(key, value, "key");
    updateState({ [key]: value });
  };
  const isValidData = () => {
    const error = validator({
      email,
      password,
      confirmPassword,
    });
    if (error) {
      showDangerMsg(error)
      Alert.alert(error);
      return;
    }
    return true;
  };
  // console.log(email, password, confirmPassword);

  const onForgetPassword = async () => {
    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }
    if (password === confirmPassword) {
      let forgetApiData = {
        email: email,
        new_password: password,
      };
      // console.log(forgetApiData, "forget data");
      await actions.forgetPassword(forgetApiData).then((res) => {
        console.log(res, "response ");
        Alert.alert(strings.OTP_SENT_SUCESSFULLY)
        showInfoMsg(strings.OTP_SENT_SUCESSFULLY)
        if (res?.status == 200) {
          navigation.navigate(navigationStrings.OTP_VERIFICATION, {
            loginType: 1,
            userId: res?.data?.user_id,
            email: res?.data?.email,
            mobile: null,
            data: res?.data
          });
        }
      });

    } else {
      showDangerMsg(strings.BOTH_PASSWORD_SHOULD_BE_SAME)
      Alert.alert(strings.BOTH_PASSWORD_SHOULD_BE_SAME);
    }
  };

  return (
    <WrapperContainer>
      <View
        style={{ paddingTop: getStatusBarHeight(true) + moderateScale(15) }}
      >
        <GoBackHeader
          headerTextStyle={{ ...commonStyles.heavy16Black }}
          headerText={strings.FORGET_PASSWORD}
        />
      </View>

      <ScrollView style={{ ...commonStyles.paddingV20xH10 }}>
        <Text
          style={{
            ...commonStyles.heavy14Black,
            marginBottom: moderateScale(10),
          }}
        >
          {strings.FORGET_DES}
        </Text>
        <CommonTextInput
          placeholder={strings.EMAIL_ID}
          value={email}
          onChangeText={(value) => onChangeTextResult("email", value)}
          textInput={{
            ...styles.textinputStyle,
            ...commonStyles.medium16Black,
          }}
        />
        <CommonTextInput
          placeholder={strings.PASSWORD}
          value={password}
          password={true}
          hide={passwordVisible}
          setHide={setPasswordVisible}
          onChangeText={(value) => onChangeTextResult("password", value)}
          textInput={{
            ...styles.textinputStyle,
            ...commonStyles.medium16Black,
          }}
        />
        <CommonTextInput
          placeholder={strings.CONFIRM_PASSWORD}
          value={confirmPassword}
          password={true}
          hide={confirmPasswordVisible}
          setHide={setConfirmPasswordVisible}
          onChangeText={(value) => onChangeTextResult("confirmPassword", value)}
          textInput={{
            ...styles.textinputStyle,
            ...commonStyles.medium16Black,
          }}
        />
      </ScrollView>
      <KeyboardAvoidingView
        enabled={true}
        behavior={Platform.OS == "android" ? "height" : "padding"}
      >
        <ButtonComponent
          onPress={onForgetPassword}
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
export default ForgetPassword;
