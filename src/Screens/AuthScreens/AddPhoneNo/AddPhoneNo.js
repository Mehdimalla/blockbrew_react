//import liraries
import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ButtonComponent from "../../../components/ButtonComponent";
import CountryCodePicker from "../../../components/CountryCodePicker";
import GoBackHeader from "../../../components/GoBackHeader";
import WrapperContainer from "../../../components/WrapperContainer";
import strings from "../../../constants/lang";
import navigationStrings from "../../../navigation/navigationStrings";
import actions from "../../../redux/actions";
import colors from "../../../styles/colors";
import commonStyles from "../../../styles/commonStyles";
import {
  moderateScale,
  moderateScaleVertical,
} from "../../../styles/responsiveSize";
import validator from "../../../utils/validations";

// create a component
const AddPhoneNo = ({ navigation, route }) => {
  const user_id = route?.params?.userData?.user_id;

  const [upDateData, setUpdateData] = useState({
    countryCode: "91",
    countryFlag: "IN",
    phoneNumber: "",
  });

  const { phoneNumber, countryCode, countryFlag } = upDateData;
  const updateState = (data) =>
    setUpdateData((state) => ({ ...state, ...data }));
  const onChangeTextResult = (key, value) => {
    // console.log(key, value, "key");
    updateState({ [key]: value });
  };
  // console.log(phoneNumber, countryCode, countryFlag);

  const isValidData = () => {
    const error = validator({
      phoneNumber,
    });
    if (error) {
      alert(error);
      return;
    }
    return true;
  };

  const onAddPhone = async () => {
    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }

    const phoneApiData = {
      country_code: countryCode,
      mobile: phoneNumber,
      user_id: user_id,
    };
    await actions.AddPhoneNumber(phoneApiData).then((res) => {
      navigation.navigate(navigationStrings.OTP_VERIFICATION, {
        loginType: 2,
        data: res,
        userId: user_id,
        mobile: res?.data?.mobile,
        email: null,
      });
      console.log(res, "resssssss");
    });
  };
  return (
    <WrapperContainer>
      <View
        style={{ paddingTop: getStatusBarHeight(true) + moderateScale(15) }}
      >
        <GoBackHeader
          headerTextStyle={{ ...commonStyles.heavy16Black }}
        //   headerText={strings.ADD_PHONE_NUMBER}
        />
      </View>

      <ScrollView style={{ ...commonStyles.paddingV20xH15 }}>
        <Text style={{ ...commonStyles.black18Black }}>
          {strings.ADD_PHONE_NUMBER}
        </Text>
        <Text
          style={{
            ...commonStyles.heavy14Black,
            marginVertical: moderateScaleVertical(10),
          }}
        >
          {strings.ADD_PHONE_DES}
        </Text>
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
      </ScrollView>
      <KeyboardAvoidingView
        enabled={true}
        // style={{ margin: moderateScale(20) }}
        behavior={Platform.OS == "android" ? "height" : "padding"}
      >
        <ButtonComponent
          onPress={onAddPhone}
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
export default AddPhoneNo;
