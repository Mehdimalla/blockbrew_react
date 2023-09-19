import React from "react";
import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../../styles/responsiveSize";
import colors from "../../../styles/colors";
import { getStatusBarHeight } from "react-native-status-bar-height";

import fontFamily from "../../../styles/fontFamily";

export const styles = StyleSheet.create({
  priceContainer: {
    // flex: 1,
    paddingTop: getStatusBarHeight(true) + moderateScale(15),
  },
  priceHeading: {
    color: colors.black,
    fontFamily: fontFamily.AvenirBlack,
    fontSize: textScale(17),
    textAlign: "center",
    marginBottom: moderateScale(10),
  },
  textInputBg: {
    backgroundColor: colors.textInputskyblueBg,
    borderWidth: 0,
    borderRadius: moderateScale(10),
    height: moderateScale(54),
    paddingHorizontal: moderateScale(23),
    fontSize: textScale(15),
    fontFamily: fontFamily.Helveticaneue,
  },
  tabItemBox: {
    flex: 1,
    alignItems: "center",
    paddingTop: moderateScaleVertical(25),
    paddingBottom: moderateScale(20),
    borderBottomColor: colors.tabIconColor,
  },
  headingRow: {
    flexDirection: "row",
    paddingHorizontal: moderateScale(21),
    justifyContent: "space-between",
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(10),
  },
  flatlistContainer: {
    paddingHorizontal: moderateScale(17),
    paddingVertical: moderateScale(17),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  coinLogo: {
    height: moderateScale(36),
    width: moderateScale(36),
    marginRight: moderateScale(9),
  },
  shortForm: {
    textTransform: "uppercase",
    opacity: 0.41,
  },
  priceHrChange: {
    justifyContent: "flex-end",
    flex: 0.6,
    // backgroundColor: "green",
  },
  price: {
    letterSpacing: 0.2,
    marginRight: moderateScale(7),
    flexShrink: 0.5,
  },
  coinName: {
    color: colors.lightGreyTxt,
    flexShrink: 0.45,
  },
  horiZontalBar: {
    borderTopWidth: 0.5,
    color: colors.lightGreyInputBorderColor,
    opacity: 0.4,
    marginHorizontal: moderateScale(20),
  },
  arrowStyle: {
    marginRight: moderateScale(8),
    height: moderateScale(15),
    width: moderateScale(9),
    alignSelf: "center",
  },

  // actionsheet Style
  actionsheetContainer: {
    padding: moderateScaleVertical(20),
  },
  actionCoinLogo: {
    width: moderateScale(42),
    height: moderateScale(32),
    marginRight:moderateScale(7)
  },
  eyeWatchimg: {
    height: 30,
    width: 25,
  },
  eyeWatchtxt: { paddingLeft: moderateScale(10), textTransform: "uppercase" },
  actionTri:{
    height: moderateScale(14),
    width: moderateScale(21),
    marginRight: moderateScale(8),
    marginLeft:moderateScale(18)
  }
});
