//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
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
import { loginAction } from "../../../redux/actions/authActions";
import colors from "../../../styles/colors";
import commonStyles from "../../../styles/commonStyles";
import fontFamily from "../../../styles/fontFamily";
import { moderateScale, textScale } from "../../../styles/responsiveSize";
import { showDangerMsg, showSuccessMsg, showWarningMsg } from "../../../utils/helperFunction";
import { setLogin } from "../../../utils/utils";
import validator from "../../../utils/validations";

// create a component
const Login = ({ navigation }) => {

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [upDateData, setUpdateData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = upDateData;
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
    });
    if (error) {
      Alert.alert(error);
      showWarningMsg(error)
      return;
    }
    return true;
  };

  const onLogin = async () => {
    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }
    try {
      const loginApi = ({
        email: email,
        password: password,
      })
      // console.log(loginApi, "logindataaaa");
      await actions.LoginData(loginApi).then((res) => {
        if (res?.status == 200) {
          showSuccessMsg(strings.LOGGEDIN_SUCCESSFULLY)
          Alert.alert(strings.LOGGEDIN_SUCCESSFULLY)
        }
        else {
          showDangerMsg(strings.EMAIL_OR_PASS_INCORRECT)
          alert(strings.EMAIL_OR_PASS_INCORRECT)
        }
      })
    } catch (error) {
      console.log(error, "error occurred");

    }
  }

  return (
    <WrapperContainer>
      <View
        style={{ paddingTop: getStatusBarHeight(true) + moderateScale(15) }}
      >
        <GoBackHeader
          headerTextStyle={{ ...commonStyles.heavy16Black }}
          headerText={strings.LOGIN}
        />
      </View>

      <ScrollView style={{ ...commonStyles.paddingV20xH10 }}>
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
        <TouchableOpacity
          style={{ marginTop: moderateScale(10) }}
          onPress={() => navigation.navigate(navigationStrings.FORGET_PASSWORD)}
        >
          <Text style={{ ...commonStyles.heavy14Black }}>
            {strings.FORGET_PASSWORD}.?
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <KeyboardAvoidingView
        enabled={true}
        // style={{ margin: moderateScale(20) }}
        behavior={Platform.OS == "android" ? "height" : "padding"}
      >
        <ButtonComponent
          onPress={onLogin}
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
export default Login;
