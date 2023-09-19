import React, { useState, useEffect, useRef, createRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Platform,
  Alert,
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { useSelector } from "react-redux";
import ButtonComponent from "../../../components/ButtonComponent";
import GoBackHeader from "../../../components/GoBackHeader";
import WrapperContainer from "../../../components/WrapperContainer";
import imagePath from "../../../constants/imagePath";
import strings from "../../../constants/lang";
import navigationStrings from "../../../navigation/navigationStrings";
import actions from "../../../redux/actions";
import colors from "../../../styles/colors";
import fontFamily from "../../../styles/fontFamily";
import { moderateScale, textScale } from "../../../styles/responsiveSize";
import {
  showDangerMsg,
  showInfoMsg,
  showSuccessMsg,
} from "../../../utils/helperFunction";

// create a component
const SetPin = ({ navigation }) => {
  const data = useSelector((state) => state?.auth?.userLoginStatus);
  console.log(data, "dataa");
  const pinCreated = data?.isPinCreated;
  const CELL_COUNT = 6;
  const [value, setValue] = useState("");
  const [code, setCode] = useState("");
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [pin, setPin] = useState(true);
  const inputRef = useRef(null);

  const confirmPin = async () => {
    if (value == "") {
      Alert.alert("please enter PIN");
    } else if (value.length != 6) {
      Alert.alert("PIN should be 6 digits");
    } else if (value.length == 6) {
      setPin(false);
    }
  };
  const pinCreatedSucessfully = async () => {
    let apiData = {
      isPinCreated: pinCreated,
      pin: value,
    };
    if (pinCreated == 0 && code == null) {
      console.log(apiData, "set pin");
      if (value == code) {
        await actions.createPin(apiData).then((res) => {
          //  create pin API
          console.log(res, "resss");
          if (res?.status == 200) {
            showSuccessMsg(strings.PIN_CREATED_SUCESSFULLY);
            alert(strings.PIN_CREATED_SUCESSFULLY);
            navigation.navigate(navigationStrings.SECURITY);
          }
        });
      }
    } else {
      let apiData2 = {
        isPinCreated: pinCreated,
        pin: value,
        c_pin: code,
      };
      await actions.resetPin(apiData2).then((res) => {
        // reset PIN API
        console.log(res, "response++++");
        if (res?.status == 200) {
          Alert.alert(strings.PIN_RESET);
          navigation.navigate(navigationStrings.SECURITY);
        } else {
          Alert.alert(res?.message);
        }
      });
    }
  };
  return (
    <>
      <WrapperContainer>
        <View
          style={{ paddingTop: moderateScale(getStatusBarHeight(true) + 20) }}
        >
          <View style={styles.headerstyle}>
            <GoBackHeader borderShadowLine={false} />
            <View style={{ flex: 0.72 }}>
              <Image source={imagePath.setpinicon} />
            </View>
          </View>
        </View>

        {pin ? (
          <>
            <View style={{ flex: 0.97 }}>
              <View style={styles.headingtxtstyle}>
                <Text style={styles.setpintxt}>{strings.Set_PIN}</Text>
                <Text style={styles.securitytxt}>{strings.ADDED_SECURITY}</Text>
              </View>
              <View style={styles.cellStyle}>
                <CodeField
                  autoFocus={true}
                  ref={inputRef}
                  value={value}
                  onChangeText={setValue}
                  cellCount={CELL_COUNT}
                  rootStyle={styles.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={({ index, symbol, isFocused }) => (
                    <Text
                      key={index}
                      style={[styles.cell, isFocused && styles.focusCell]}
                      onLayout={getCellOnLayoutHandler(index)}
                    >
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  )}
                />
              </View>
            </View>

            <KeyboardAvoidingView
              enabled={true}
              behavior={Platform.OS == "android" ? "height" : "padding"}
            >
              <ButtonComponent
                onPress={() => confirmPin()}
                buttonText={strings.CONTINUE}
                btnStyle={styles.btnStyle}
                buttonTxt={styles.buttonTxt}
              />
            </KeyboardAvoidingView>
          </>
        ) : (
          <>
            <View style={{ flex: 0.97 }}>
              <View style={styles.headingtxtstyle}>
                <Text style={styles.confirmpintxt}>{strings.CONFIRM_PIN}</Text>

                <Text style={styles.securitytxt}>
                  {strings.PLEASE_RE_ENTER_PIN}
                </Text>
              </View>
              <View style={styles.cellStyle}>
                <CodeField
                  autoFocus={true}
                  ref={inputRef}
                  value={code}
                  onChangeText={setCode}
                  cellCount={CELL_COUNT}
                  rootStyle={styles.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={({ index, symbol, isFocused }) => (
                    <Text
                      key={index}
                      style={[styles.cell, isFocused && styles.focusCell]}
                      onLayout={getCellOnLayoutHandler(index)}
                    >
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  )}
                />
              </View>
            </View>
            <KeyboardAvoidingView
              enabled={true}
              behavior={Platform.OS == "android" ? "height" : "padding"}
            >
              <ButtonComponent
                onPress={pinCreatedSucessfully}
                buttonText={strings.CONTINUE}
                btnStyle={styles.btnStyle}
                buttonTxt={styles.buttonTxt}
              />
            </KeyboardAvoidingView>
          </>
        )}
      </WrapperContainer>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  headerstyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cellStyle: {
    paddingHorizontal: moderateScale(30),
  },

  codeFieldRoot: {
    marginTop: moderateScale(20),
    paddingHorizontal: moderateScale(25),
  },

  codeFieldRoot: {
    marginTop: moderateScale(20),
    paddingHorizontal: moderateScale(25),
  },
  cell: {
    width: moderateScale(30),
    borderRadius: moderateScale(15),
    height: 30,
    color: colors.blackOpacity70,
    alignItems: "center",
    borderWidth: 2,
    fontSize: textScale(20),
    bottom: 5,
    borderColor: colors.blackOpacity20,
    textAlign: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 5.22,
    shadowRadius: 10.22,

    // Android
    // elevation: 3,
  },
  focusCell: {
    borderColor: colors.blackOpacity43,
    color: colors.blackOpacity43,
  },
  confirmpintxt: {
    fontSize: textScale(18),
    fontFamily: fontFamily.AvenirHeavy,
    color: colors.black,
  },
  headingtxtstyle: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  setpintxt: {
    fontSize: textScale(18),
    fontFamily: fontFamily.AvenirHeavy,
    color: colors.black,
  },

  btnStyle: {
    marginHorizontal: moderateScale(20),
    bottom: moderateScale(10),
  },
  confirmpintxt: {
    fontSize: textScale(18),
    fontFamily: fontFamily.AvenirHeavy,
    color: colors.black,
  },
  headingtxtstyle: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  setpintxt: {
    fontSize: textScale(18),
    fontFamily: fontFamily.AvenirHeavy,
    color: colors.black,
  },
  securitytxt: {
    color: colors.blackOpacity70,
    fontFamily: fontFamily.AvenirMedium,
  },

  buttonTxt: {
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(16),
  },
});

//make this component available to the app
export default SetPin;
