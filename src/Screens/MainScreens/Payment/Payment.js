import React, { useEffect, useState } from 'react';
import {
  createPaymentMethod,
  createToken,
  StripeProvider,
} from "@stripe/stripe-react-native";
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ButtonComponent from "../../../components/ButtonComponent";
import GoBackHeader from "../../../components/GoBackHeader";
import PaymentComp from "../../../components/PaymentComp";
import WrapperContainer from "../../../components/WrapperContainer";
import strings from "../../../constants/lang";
import navigationStrings from "../../../navigation/navigationStrings";
import actions from "../../../redux/actions";
import colors from "../../../styles/colors";
import commonStyles from "../../../styles/commonStyles";
import fontFamily from "../../../styles/fontFamily";
import { moderateScale, textScale } from "../../../styles/responsiveSize";
import { showDangerMsg } from "../../../utils/helperFunction";
const Payment = ({ route, navigation }) => {
  const amount = route?.params?.data;
 
  const [cardDetails, setCardDetails] = useState({});
  const [response, setResponse] = useState();
  // const key = await fetch(`${API_BASE_URL}create-payment-intent`); // fetch key from your server here
  // const SECRECT_KEY = "sk_test_51Kei0PDdDnwFdkhkf90191Bjxn24d8b06GOFzz7ABXExrQPYpQqKZFXKnpJG0oHS9MjgO4eJiA37kqg6pCPGp4i000Bl4MfDXW"
  console.log(response, "response");
  const OncardDetails = (cardDetails) => {
    setCardDetails(cardDetails);
  };
  const _createPaymentMethod = async (cardInfo, res2) => {
    console.log(res2, "ress2");
    console.log(cardInfo, "createPaymentMethod>>>ardInfo");
    if (res2) {
      await createPaymentMethod({
        paymentMethodType: "Card",
        token: res2,
        card: cardInfo,
        billing_details: {
          name: "Jenny Rosen",
        },
      })
        .then((res) => {
          console.log("_createPaymentMethod res", res);
          if (res && res?.error && res?.error?.message) {
            showDangerMsg(res?.error?.message);
          } else {
            console.log(res?.paymentMethod, "success_createPaymentMethod ");
            let apiData = {
              currency: "USD",
              currency: amount,
            };
            actions.sendOtptransaction(apiData).then((res) => {
              console.log(res, "res+++");
              if (res?.status == 200) {
                navigation.navigate(navigationStrings.OTP_VERIFICATION, {
                  amount: amount,
                  loginType: 1,
                  data: response,
                  name: "transaction",
                });
              } else {
                Alert.alert("please input correct details");
              }
            });
          }
        })
        .catch((err) => console.log(err, "errrrrr"));
    }
  };

  const Onpayment = async (cardInfo) => {
    if (cardInfo) {
      await createToken({ ...cardInfo, type: "Card" })
        .then((res) => {
          setResponse(res?.token);
          // console.log(res?.token, 'stripeTokenres>>');
          // console.log(cardInfo, 'stripeTokencardInfo>>');
          if (!!res?.error) {
            Alert.alert(res.error.localizedMessage);
            return;
          }
          if (res && res?.token && res.token?.id) {
            _createPaymentMethod({ cardInfo, type: "Card" }, res.token?.id);
          } else {
            console.log(err, "errr");
          }
        })
        .catch((err) => {
          console.log(err, "err>>");
        });
    } else {
      // showDangerMsg('ehbdjhsdb');
    }
  };
  return (
    <WrapperContainer>
      <View
        style={{
          paddingTop: getStatusBarHeight(true) + moderateScale(20),
        }}
      >
        <GoBackHeader headerText={"Card Details"} />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingLeft: 20, paddingTop: 10 }}>
          <Text
            style={{
              ...commonStyles.heavy18Black,
              color: colors.blackOpacity43,
            }}
          >
            {strings.ADD_CARD_DETAILS}
          </Text>
        </View>
        <StripeProvider
          // autoFocus= {true}
          IsCardInWalletResult={true}
          publishableKey={
            "pk_test_51Kei0PDdDnwFdkhkPoE5GnKWwfnsRukwkNEUBHD19TaBQwfBG6IxD0ey1Veh4gAqu8P723jRwLFjsYd91RflPDT500z1wimJjN"
          }
          merchantIdentifier="merchant.identifier"
        >
          <PaymentComp OncardDetails={(val) => OncardDetails(val)} />
        </StripeProvider>
      </ScrollView>
      <KeyboardAvoidingView
        enabled={true}
        behavior={Platform.OS == "android" ? "height" : "padding"}
      >
        <ButtonComponent
          onPress={() => Onpayment(cardDetails)}
          btnStyle={styles.btnStyle}
          buttonText={strings.PAY}
          buttonTxt={{ fontFamily: fontFamily.AvenirHeavy }}
        />
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
};
export default Payment;
const styles = StyleSheet.create({
  btnStyle: {
    marginHorizontal: moderateScale(20),
    marginBottom: moderateScale(15),
  },
});
