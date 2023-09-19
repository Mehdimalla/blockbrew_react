import { CardField } from "@stripe/stripe-react-native";
import React from "react";
import { View, Text } from "react-native";
import { moderateScale } from "../styles/responsiveSize";
const PaymentComp = ({ OncardDetails = () => { } }) => {
  return (
    <View style={{ marginHorizontal: moderateScale(20) }}>
      <CardField
        autofocus
        postalCodeEnabled={true}
        placeholders={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={{
          backgroundColor: "#FFFFFF",
          textColor: "#000000",
        }}
        style={{
          width: "100%",
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails) => {
          OncardDetails(cardDetails);
          // console.log('cardDetails', cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log("focusField", focusedField);
        }}
       
      />
    </View>
  );
};
export default PaymentComp;
