//import liraries
import React, { createRef, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import imagePath from "../constants/imagePath";
import colors from "../styles/colors";
import fontFamily from "../styles/fontFamily";
import { height, moderateScale, textScale, width } from "../styles/responsiveSize";


// create a component
const RenderBlockview = ({
  fullForm = "",
  shortForm = "",
  percentage = "",
  price = "",
  logo = {},

}) => {
  const pricePerSign = () => {

    if (percentage != null) {
      let stringPr = percentage.toString();
      let prIndx = stringPr[0];
      return prIndx;
    } else {
      null;
    }
  };

  return (


    <View style={styles.FlatListContainer}>
      <View style={{ flex: 0.98 }}>
        <View style={styles.logoshotform}>

          <Image
            resizeMode="contain"
            source={{ uri: logo }}
            style={styles.currencyImg}
          />

          <Text style={styles.shortFormText}>{shortForm}</Text>

        </View>

        <Text
          style={{
            ...styles.shortFormText,
            marginBottom: moderateScale(7),
            opacity: 0.9,

          }}
        >
          {fullForm}
        </Text>
      </View>
      <Text
        style={[
          styles.shortFormText,
          {
            opacity: 0.5,
            fontSize: textScale(16),
            marginBottom: moderateScale(53),
          },
        ]}
      >

        ${`${pricePerSign() == "-" ? "" : ""}${Number(price).toFixed(4)}`}
      </Text>

      <View style={styles.percentstyle}>
        <Image
          source={
            pricePerSign() == "-"
              ? imagePath.redInvertedTrainagle
              : imagePath.greenTrainagle
          }
          style={styles.percentageicon}
        />

        <Text
          style={{
            ...styles.shortFormText,
            color: pricePerSign() == "-" ? colors.red : colors.green,
          }}
        >

          {`${pricePerSign() == "-" ? "" : "+"}${Number(percentage).toFixed(
            2
          )}`}
          %
        </Text>

      </View>

    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  FlatListContainer: {
    // height: height / 4.5,

    width: width / 2.5,
    padding: moderateScale(15),
    borderColor: colors.staticFlatlistShadowColor,
    borderWidth: 0.5,
    borderRadius: moderateScale(11),
    shadowColor: colors.staticFlatlistShadowColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 3,
    backgroundColor: "white",
    marginVertical: 5,
    marginRight: moderateScale(16),
    marginLeft: 1,

  },

  currencyImg: {
    height: moderateScale(33),
    width: moderateScale(33),
    backgroundColor: "grey",
    borderRadius: 50,
    marginRight: moderateScale(10),
  },
  logoshotform: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: moderateScale(12),

  },
  shortFormText: {
    fontFamily: fontFamily.AvenirMedium,
    fontSize: textScale(14),
    color: colors.black,
    flexShrink: 0.6,
    letterSpacing: 1,
  },

  // percentstyle:
  // {

  //   flexDirection: "row",
  //   alignItems: "center",
  //   paddingLeft: moderateScale(15),
  //   // alignSelf: "center",
  //   bottom: moderateScale(15),
  //   position: "absolute"
  // }

  percentstyle: {
    flexDirection: "row",
    bottom: moderateScale(15),
    position: "absolute",
    paddingLeft: moderateScale(16)
  },
  percentageicon:
  {
    height: moderateScale(12),
    width: moderateScale(20),
    marginRight: moderateScale(5),
    marginTop: moderateScale(5)
  }

});

//make this component available to the app
export default RenderBlockview;
