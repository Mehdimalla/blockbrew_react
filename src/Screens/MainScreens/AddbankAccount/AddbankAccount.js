//import liraries
import React, { Component, useState } from "react";
import { View, Text, Alert } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ButtonComponent from "../../../components/ButtonComponent";
import CommonTextInput from "../../../components/CommonTextInput";
import GoBackHeader from "../../../components/GoBackHeader";
import WrapperContainer from "../../../components/WrapperContainer";
import imagePath from "../../../constants/imagePath";
import strings from "../../../constants/lang";
import navigationStrings from "../../../navigation/navigationStrings";
import actions from "../../../redux/actions";
import { moderateScale, textScale } from "../../../styles/responsiveSize";
import { showInfoMsg, showWarningMsg } from "../../../utils/helperFunction";
import { styles } from "./styles";

const AddBankAccount = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [accountVisible, setAccountVisible] = useState(true);
  const [update, setUpdate] = useState({
    passwordVisible: true,
    accountNumber: "",
    reEnterAccountNum: "",
    ifscCode: "",
    bankName: ""
  })
  const { accountNumber, reEnterAccountNum, ifscCode, bankName } = update;

  const updateState = (data) => setUpdate((state) => ({ ...state, ...data }));
  const onChangeTextResult = (key, value) => {
    // console.log(key, value, "key");
    updateState({ [key]: value });
  };
  const accountRegex = /^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/;
  const ifscRegex = "/[A-Z|a-z]{4}[0][a-zA-Z0-9]{6}$/";



  const addBankAccount = async () => {
    if (accountNumber == "") {
      Alert.alert("Please enter account Number")
      showWarningMsg("Please enter account Number")
    }
    else if (!accountNumber.match(accountRegex)) {
      Alert.alert("enter valid account number")
    }
    else if (reEnterAccountNum == "") {
      Alert.alert("please re enter account number")
    }
    else if (accountNumber != reEnterAccountNum) {
      Alert.alert("account number doesnot match")
    }
    else if (ifscCode == "") {
      Alert.alert("enter IFSC code")
    }
    else if (ifscCode.length < 11) {
      Alert.alert("enter valid IFSC code")
    }
    else if (bankName == "") {
      Alert.alert("enter bank name")
    }
    else {

    }
    if (accountNumber == reEnterAccountNum) {
      let apidata = {
        account_number: accountNumber,
        ifsc_code: ifscCode,
        bank_name: bankName,
      }
      console.log(apidata, "api data");
      await actions.addBank(apidata).then((res) => {
        console.log(res, "res from bank details");
        if (res?.status == 200) {
          Alert.alert(res?.message)
          navigation.navigate(navigationStrings.ACCOUNT_SETTINGS)
        }
      }).catch((error) => {
        console.log(error, "error occurred");
      })
    }
  }

  return (
    <WrapperContainer>
      <View
        style={{
          paddingTop: moderateScale(getStatusBarHeight(true) + 20),
          flex: 0.98,
        }}
      >
        <GoBackHeader
          borderShadowLine={true}
          blankSpace={true}
          headerText={strings.ADD_BANK_ACCOUNT}
        />
        <View style={styles.headingstyle}>
          <Text style={styles.addbankaccounttxt}>
            {strings.ADD_BANK_ACCOUNT_TODEPOSIT}
          </Text>
          <Text style={styles.bankaccountdesc}>
            {strings.BANK_ACCOUNT_SHOULD_BELONG}
          </Text>
          <Text style={styles.jacksparrowtxt}>{strings.JACK_SPARROW}</Text>
        </View>
        <View style={styles.inputcontainer}>
          <CommonTextInput
            value={accountNumber}
            password={true}
            hide={passwordVisible}
            keyboardType="numeric"
            setHide={setPasswordVisible}
            showRighticonStyle={{ right: moderateScale(30) }}
            placeholder={strings.ACCOUNT_NUMBER}
            onChangeText={(accountNumber) => onChangeTextResult("accountNumber", accountNumber)}
            textInput={styles.textInputstyle}
          />
        </View>
        <CommonTextInput
          value={reEnterAccountNum}
          password={true}
          keyboardType="numeric"
          hide={accountVisible}
          setHide={setAccountVisible}
          showRighticonStyle={{ right: moderateScale(30) }}
          onChangeText={(reEnterAccountNum) => onChangeTextResult("reEnterAccountNum", reEnterAccountNum)}
          placeholder={strings.REENTER_ACCOUNT_NUMBER}
          textInput={styles.textInputstyle}
        />
        <CommonTextInput
          value={ifscCode}
          onChangeText={(ifscCode) => onChangeTextResult("ifscCode", ifscCode)}
          placeholder={strings.IFSC_CODE}
          textInput={styles.textInputstyle}
        />
        <CommonTextInput
          value={bankName}
          onChangeText={(bankName) => onChangeTextResult("bankName", bankName)}
          placeholder={"bank_name "}
          textInput={styles.textInputstyle}
        />
      </View>

      {/* <KeyboardAvoidingView
        enabled={true}
        behavior={Platform.OS == "android" ? "height" : "padding"}
      > */}
      <ButtonComponent
        onPress={addBankAccount}
        btnStyle={styles.continuebtnstyle}
        buttonText={strings.PROCEED}
        buttonTxt={styles.continuebtn}
      />
      {/* </KeyboardAvoidingView> */}
    </WrapperContainer>
  );
};

export default AddBankAccount;
