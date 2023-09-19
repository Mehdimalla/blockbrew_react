// //import liraries
// import React, { Component, useCallback, useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   Alert,
//   TouchableOpacity,
// } from "react-native";
// import { getStatusBarHeight } from "react-native-status-bar-height";
// import GoBackHeader from "../../../components/GoBackHeader";
// import WrapperContainer from "../../../components/WrapperContainer";
// import strings from "../../../constants/lang";
// import commonStyles from "../../../styles/commonStyles";
// import { moderateScale } from "../../../styles/responsiveSize";
// import ButtonComponent from "../../../components/ButtonComponent";
// import SquarePinCode from "../../../components/SquarePinCode";
// import actions from "../../../redux/actions";
// import colors from "../../../styles/colors";
// import { loginAction } from "../../../redux/actions/authActions";
// import { showDangerMsg, showSuccessMsg } from "../../../utils/helperFunction";
// import navigationStrings from "../../../navigation/navigationStrings";

// // create a component
// const OtpVerification = ({ route, navigation }) => {
//   const [emailOtp, setEmailOtp] = useState("");
//   const [phoneOtp, setPhoneOtp] = useState("");

//   const data = route?.params;
//   // console.log(data,"dataa");
//   const userId = route?.params?.userId;
//   const loginType = route?.params?.loginType;
//   const mobile = route?.params?.mobile;
//   const email = route?.params?.email;
//   const actionData = data?.userData;
//   console.log(actionData, "action data");
// //   //payment details//
// const data = route?.params;
// //   // const name = data?.name;
// //   // const token_id = data?.data?.id;
// //   // const amount = data?.amount;
//   ////////
//   // console.log(data, "actiondata");

//   console.log(emailOtp, phoneOtp);
//   const phoneOtpVerify = async () => {
//     if (
//       (loginType === 3 && emailOtp.length != 4 && phoneOtp.length != 4) ||
//       (loginType === 2 && phoneOtp.length != 4) ||
//       (loginType === 1 && emailOtp.length != 4)
//     ) {
//       alert(strings.OTP_CONTAIN_4_DIGITS);
//     } else {
//       var emailOtpbasedOnType = null;
//       var phoneOtpbasedOnType = null;
//       if (loginType === 1) {
//         var emailOtpbasedOnType = emailOtp;
//       } else if (loginType === 2) {
//         var phoneOtpbasedOnType = phoneOtp;
//       } else {
//         var phoneOtpbasedOnType = phoneOtp;
//         var emailOtpbasedOnType = emailOtp;
//       }
// //       //////transaction
// let apidata = {
//   amount: amount,
//   token: token_id,
//   currency: "USD"
// }
// console.log(apidata, "apidata");
// if (name == "transaction") {
//   actions.verifyDeposit(apidata).then((res) => {
//     if (res?.status == 200) {
//       Alert.alert("sucessfull")
//     }
//     console.log(res, "res>>>>>");
//   })
//       }
//       else {
//       let otpData = {
//         user_id: userId,
//         type: loginType,
//         mobile_otp: phoneOtpbasedOnType,
//         email_otp: emailOtpbasedOnType,
//       };

//       console.log(otpData, "apiData for verification screen");
//       await actions.phoneEmailOtp(otpData).then((res) => {
//         console.log(res, "res=======");
//         if (res?.status == 200) {
//           showSuccessMsg(strings.EMAIL_VERIFIED);
//           Alert.alert(strings.EMAIL_VERIFIED);
//           loginAction(actionData);
//         } else {
//           showDangerMsg(strings.INVALID_OTP);
//           Alert.alert(strings.INVALID_OTP);
//         }
//       });
//     }
//     // }
//   };

//   // resend code api
//   const resendOtp = async () => {
//     let apiData = {
//       user_id: userId,
//       type: loginType,
//       email: email,
//       mobile: mobile,
//     };
//     // console.log(apiData, "apidata for resend code");//
//     await actions.resendCode(apiData).then((res) => {
//       if (res.status == 200) {
//         showSuccessMsg(strings.OTP_SENT_SUCESSFULLY);
//         Alert.alert(strings.OTP_SENT_SUCESSFULLY);
//       }
//       console.log(res, "ressss");
//     });
//   };

//   const EmailOtp = useCallback(() => {
//     if (loginType === 1 || loginType === 3) {
//       return (
//         <View style={{ marginBottom: moderateScale(40) }}>
//           <Text
//             style={{ ...commonStyles.black18Black, ...styles.enterOtpHeading }}
//           >
//             {strings.ENTER_EMAIL_OTP}
//           </Text>
//           <Text style={{ ...commonStyles.regular14Black, opacity: 0.7 }}>
//             {strings.OTP_SENT_EMAIL}
//           </Text>
//           <View>
//             <SquarePinCode
//               emailOtpValue={(val) => setEmailOtp(val)}
//               cellCount={4}
//             />
//           </View>
//           <View
//             style={{ ...commonStyles.rowCenter, paddingTop: moderateScale(20) }}
//           >
//             <Text
//               style={{
//                 ...commonStyles.heavy14Black,
//                 color: colors.blackOpacity40,
//               }}
//             >
//               {strings.DONT_RECEIVE}{" "}
//             </Text>
//             <TouchableOpacity onPress={() => resendOtp()}>
//               <Text
//                 style={{
//                   ...commonStyles.heavy15Black,
//                   color: colors.blueButton,
//                 }}
//               >
//                 {strings.RESEND_CODE}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       );
//     } else {
//       return null;
//     }
//   }, []);

//   const PhoneOtp = useCallback(() => {
//     if (loginType === 2 || loginType === 3) {
//       return (
//         <View>
//           <Text
//             style={{ ...commonStyles.black18Black, ...styles.enterOtpHeading }}
//           >
//             {strings.ENTER_PHONE_OTP}
//           </Text>
//           <Text style={{ ...commonStyles.regular14Black, opacity: 0.7 }}>
//             {strings.OTP_SENT_PHONE}
//           </Text>
//           <View>
//             <SquarePinCode
//               phoneOtpValue={(val) => setPhoneOtp(val)}
//               cellCount={4}
//             />
//           </View>

//           <View
//             style={{ ...commonStyles.rowCenter, paddingTop: moderateScale(20) }}
//           >
//             <Text
//               style={{
//                 ...commonStyles.heavy14Black,
//                 color: colors.blackOpacity40,
//               }}
//             >
//               {strings.DONT_RECEIVE}{" "}
//             </Text>
//             <TouchableOpacity onPress={() => resendOtp()}>
//               <Text
//                 style={{
//                   ...commonStyles.heavy15Black,
//                   color: colors.blueButton,
//                 }}
//               >
//                 {strings.RESEND_CODE}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       );
//     } else {
//       return null;
//     }
//   }, []);

//   return (
//     <WrapperContainer>
//       <View
//         style={{ paddingTop: getStatusBarHeight(true) + moderateScale(15) }}
//       >
//         <GoBackHeader headerTextStyle={{ ...commonStyles.heavy16Black }} />
//       </View>
//       <ScrollView>
//         <View style={{ padding: moderateScale(20) }}>
//           <EmailOtp />
//           <PhoneOtp />
//         </View>
//       </ScrollView>
//       <KeyboardAvoidingView
//         enabled={true}
//         behavior={Platform.OS == "android" ? "height" : "padding"}
//       >
//         <ButtonComponent
//           onPress={phoneOtpVerify}
//           buttonText={strings.CONTINUE}
//           btnStyle={{ ...commonStyles.marginV20xH15 }}
//         />
//       </KeyboardAvoidingView>
//     </WrapperContainer>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   enterOtpHeading: {
//     letterSpacing: 0.5,
//     marginBottom: moderateScale(3),
//   },
// });

// //make this component available to the app
// export default OtpVerification;

//import liraries
import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import GoBackHeader from "../../../components/GoBackHeader";
import WrapperContainer from "../../../components/WrapperContainer";
import strings from "../../../constants/lang";
import commonStyles from "../../../styles/commonStyles";
import { moderateScale } from "../../../styles/responsiveSize";
import ButtonComponent from "../../../components/ButtonComponent";
import SquarePinCode from "../../../components/SquarePinCode";
import actions from "../../../redux/actions";
import colors from "../../../styles/colors";
import { loginAction } from "../../../redux/actions/authActions";
import { showDangerMsg, showSuccessMsg } from "../../../utils/helperFunction";
import navigationStrings from "../../../navigation/navigationStrings";
import { useSelector } from "react-redux";

// create a component
const OtpVerification = ({ route, navigation }) => {
  const userData = useSelector((state) => state?.auth?.userLoginStatus);
  // console.log(userData,"user data");
  const data = route?.params;
  const userId = route?.params?.userId;
  const loginType = route?.params?.loginType;
  const mobile = route?.params?.mobile;
  const email = route?.params?.email;
  const actionData = data?.userData;

  //   //payment details//
  const name = data?.name;
  console.log(name, "actiondata");
  const token_id = data?.data?.id;
  const amount = data?.amount;
  const [emailOtp, setEmailOtp] = useState("");
  const [phoneOtp, setPhoneOtp] = useState("");

  const phoneOtpVerify = async () => {
    if (
      (loginType === 3 && emailOtp.length != 4 && phoneOtp.length != 4) ||
      (loginType === 2 && phoneOtp.length != 4) ||
      (loginType === 1 && emailOtp.length != 4)
    ) {
      alert(strings.OTP_CONTAIN_4_DIGITS);
    } else {
      var emailOtpbasedOnType = null;
      var phoneOtpbasedOnType = null;
      if (loginType === 1) {
        var emailOtpbasedOnType = emailOtp;
      } else if (loginType === 2) {
        var phoneOtpbasedOnType = phoneOtp;
      } else {
        var phoneOtpbasedOnType = phoneOtp;
        var emailOtpbasedOnType = emailOtp;
      }

      let apidata = {
        amount: amount,
        token: token_id,
        currency: "USD",
      };
      console.log(apidata, "apidata");
      if (name == "transaction") {
        actions.verifyDeposit(apidata).then((res) => {
          console.log(res, "res>>>>>");
          if (res?.status == 200) {
            loginAction({ ...userData, ...res?.data });
            Alert.alert("sucessfull");
          }
        });
      } else {
        let otpData = {
          user_id: userId,
          type: loginType,
          mobile_otp: phoneOtpbasedOnType,
          email_otp: emailOtpbasedOnType,
        };
        // console.log(otpData, "apiData for verification screen");
        await actions.phoneEmailOtp(otpData).then((res) => {
          if (res?.status == 200) {
            showSuccessMsg(strings.EMAIL_VERIFIED);
            Alert.alert(strings.EMAIL_VERIFIED);
            {
              actionData
                ? loginAction(actionData)
                : navigation.navigate(navigationStrings.LOGIN_SCREEN);
            }
          } else {
            showDangerMsg(strings.INVALID_OTP);
            Alert.alert(strings.INVALID_OTP);
          }
        });
      }
    }
  };

  // resend code api
  const resendOtp = async () => {
    let apiData = {
      user_id: userId,
      type: loginType,
      email: email,
      mobile: mobile,
    };
    // console.log(apiData, "apidata for resend code");//
    await actions.resendCode(apiData).then((res) => {
      if (res.status == 200) {
        showSuccessMsg(strings.OTP_SENT_SUCESSFULLY);
        Alert.alert(strings.OTP_SENT_SUCESSFULLY);
      }
      console.log(res, "ressss");
    });
  };

  const EmailOtp = useCallback(() => {
    if (loginType === 1 || loginType === 3) {
      return (
        <View style={{ marginBottom: moderateScale(40) }}>
          <Text
            style={{ ...commonStyles.black18Black, ...styles.enterOtpHeading }}
          >
            {strings.ENTER_EMAIL_OTP}
          </Text>
          <Text style={{ ...commonStyles.regular14Black, opacity: 0.7 }}>
            {strings.OTP_SENT_EMAIL}
          </Text>
          <View>
            <SquarePinCode
              emailOtpValue={(val) => setEmailOtp(val)}
              cellCount={4}
            />
          </View>
          <View
            style={{ ...commonStyles.rowCenter, paddingTop: moderateScale(20) }}
          >
            <Text
              style={{
                ...commonStyles.heavy14Black,
                color: colors.blackOpacity40,
              }}
            >
              {strings.DONT_RECEIVE}{" "}
            </Text>
            <TouchableOpacity onPress={() => resendOtp()}>
              <Text
                style={{
                  ...commonStyles.heavy15Black,
                  color: colors.blueButton,
                }}
              >
                {strings.RESEND_CODE}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }, []);

  const PhoneOtp = useCallback(() => {
    if (loginType === 2 || loginType === 3) {
      return (
        <View>
          <Text
            style={{ ...commonStyles.black18Black, ...styles.enterOtpHeading }}
          >
            {strings.ENTER_PHONE_OTP}
          </Text>
          <Text style={{ ...commonStyles.regular14Black, opacity: 0.7 }}>
            {strings.OTP_SENT_PHONE}
          </Text>
          <View>
            <SquarePinCode
              phoneOtpValue={(val) => setPhoneOtp(val)}
              cellCount={4}
            />
          </View>

          <View
            style={{ ...commonStyles.rowCenter, paddingTop: moderateScale(20) }}
          >
            <Text
              style={{
                ...commonStyles.heavy14Black,
                color: colors.blackOpacity40,
              }}
            >
              {strings.DONT_RECEIVE}{" "}
            </Text>
            <TouchableOpacity onPress={() => resendOtp()}>
              <Text
                style={{
                  ...commonStyles.heavy15Black,
                  color: colors.blueButton,
                }}
              >
                {strings.RESEND_CODE}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }, []);

  return (
    <WrapperContainer>
      <View
        style={{ paddingTop: getStatusBarHeight(true) + moderateScale(15) }}
      >
        <GoBackHeader headerTextStyle={{ ...commonStyles.heavy16Black }} />
      </View>
      <ScrollView>
        <View style={{ padding: moderateScale(20) }}>
          <EmailOtp />
          <PhoneOtp />
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        enabled={true}
        behavior={Platform.OS == "android" ? "height" : "padding"}
      >
        <ButtonComponent
          onPress={phoneOtpVerify}
          buttonText={strings.CONTINUE}
          btnStyle={{ ...commonStyles.marginV20xH15 }}
        />
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  enterOtpHeading: {
    letterSpacing: 0.5,
    marginBottom: moderateScale(3),
  },
});

//make this component available to the app
export default OtpVerification;
