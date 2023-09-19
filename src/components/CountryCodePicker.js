import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import CountryPicker, { Flag } from "react-native-country-picker-modal";
import colors from "../styles/colors";
import fontFamily from "../styles/fontFamily";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../styles/responsiveSize";
function CountryCodePicker({
  value,
  onChangeText,
  countryCode,
  countryFlag,
  onSelect,
}) {
  // const [countryCode, setCountryCode] = useState("91");
  // const [countryFlag, setCountryFlag] = useState("IN");
  // console.log(countryCode, countryFlag);
  // const onSelect = (country) => {
  //   setCountryFlag(country.cca2);
  //   setCountryCode(country.callingCode[0]);
  // };
  return (
    <View style={{ ...style.mainDiv }}>
      <View style={style.countryview}>
        <CountryPicker
          onSelect={onSelect}
          visible={false}
          countryCode={countryFlag}
          withCallingCode={true}
          withCallingCodeButton={countryCode}
          withEmoji={true}
          theme={{
            onBackgroundTextColor: colors.black,
            backgroundColor: colors.white,
          }}
        />

        {/* <Image
          source={imagePath.downwardArrow}
          style={{
            height: moderateScale(width / 32),
            width: moderateScale(width / 32),
            resizeMode: "contain",
            marginLeft: moderateScaleVertical(7),
          }}
        /> */}
      </View>
      <View style={{ justifyContent: "center" }}>
        <TextInput
          placeholder="Phone Number"
          style={{ ...style.textInputStyle }}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  mainDiv: {
    flexDirection: "row",
    marginVertical: moderateScaleVertical(8),
    borderWidth: 0.5,
    borderRadius: moderateScale(6),
    borderColor: colors.lightGreyTxt,
  },
  countryview: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: moderateScale(12),

    height: moderateScale(45),
    borderColor: "black",
  },
  textInputStyle: {
    color: "black",
    fontFamily: fontFamily.AvenirMedium,
    fontSize: textScale(15),
    paddingHorizontal:moderateScale(12)
  },
});

export default CountryCodePicker;
