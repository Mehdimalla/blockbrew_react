import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { useSelector } from "react-redux";
import ButtonComponent from "../../../components/ButtonComponent";
import CommonTextInput from "../../../components/CommonTextInput";
import GoBackHeader from "../../../components/GoBackHeader";
import WrapperContainer from "../../../components/WrapperContainer";
import imagePath from "../../../constants/imagePath";
import strings from "../../../constants/lang";
import { moderateScale } from "../../../styles/responsiveSize";
import { styles } from "./style";
import { ScrollView } from "react-native-gesture-handler";
import commonStyles from "../../../styles/commonStyles";
import actions from "../../../redux/actions";
import navigationStrings from "../../../navigation/navigationStrings";
import { showDangerMsg, showSuccessMsg, showWarningMsg } from "../../../utils/helperFunction";
import validator from "../../../utils/validations";

// create a component
const ChangePassword = ({ navigation }) => {
  const [oldPasswordVisible, setOldPasswordVisible] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);

  const userData = useSelector((state) => state?.auth?.userLoginStatus);
  const user_id = userData?.user_id;
  console.log(userData, "user data is");
  const token = userData?.token;

  const [hide, setHide] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const isValidData = () => {
    const error = validator({
      password,
      newPassword,
      confirmPassword
  
    });
    if (error) {
      Alert.alert(error);
      showWarningMsg(error)
      return;
    }
    return true;
  };

  const changePassword = async () => {
    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }
    if (newPassword == confirmPassword) {
      let apidata = {
        old_password: password,
        new_password: newPassword,
      }
      console.log(apidata, "api data");
      await actions.changePassword(apidata).then((res) => {
        console.log(res, 'res');
        if (res?.status == 200) {
          showSuccessMsg(res?.message)
          alert(res.message)
          navigation.navigate(navigationStrings.ACCOUNT)
        }
      })

    }
    else {
      showDangerMsg(strings.NEWPASS_CONFIRM_PASS_SAME)
      Alert.alert(strings.NEWPASS_CONFIRM_PASS_SAME);
    }
  }

  return (
    <WrapperContainer>
      <View
        style={{ paddingTop: moderateScale(getStatusBarHeight(true) + 20) }}
      >
        <GoBackHeader blankSpace={true} headerText={strings.CHANGE_PASSWORD} />
      </View>
      <ScrollView style={{ padding: moderateScale(20) }}>
        <Text style={{ ...commonStyles.heavy14Black }}>
          {strings.ENTER_NEW_PASSWORD_COINDCX}
        </Text>

        <CommonTextInput
          password={true}
          value={password}
          hide={oldPasswordVisible}
          setHide={setOldPasswordVisible}
          placeholder={strings.OLD_PASSWORD}
          onChangeText={(password) => setPassword(password)}
          showRightIcon={imagePath.showeye}
          textInput={styles.textInputstyle}
        />

        <CommonTextInput
          password={true}
          value={newPassword}
          hide={passwordVisible}
          setHide={setPasswordVisible}
          placeholder={strings.NEW_PASSWORD}
          showRightIcon={hide ? imagePath.disable : imagePath.showeye}
          onChangeText={(newPassword) => setNewPassword(newPassword)}
          textInput={styles.textInputstyle}
          pass={hide}
        />

        <CommonTextInput
          password={true}
          value={confirmPassword}
          hide={confirmPasswordVisible}
          setHide={setConfirmPasswordVisible}
          placeholder={strings.CONFIRM_NEW_PASSWORD}
          onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
          showRightIcon={imagePath.showeye}
          textInput={styles.textInputstyle}
        />
      </ScrollView>
      <KeyboardAvoidingView
        enabled={true}
        behavior={Platform.OS == "android" ? "height" : "padding"}
      >
        <ButtonComponent
          onPress={changePassword}
          buttonText={strings.CHANGE_PASSWORD}
          btnStyle={{ ...commonStyles.marginV20xH15 }}
        />
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
};
export default ChangePassword;
