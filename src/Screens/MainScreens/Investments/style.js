//import liraries
import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import colors from "../../../styles/colors";
import fontFamily from "../../../styles/fontFamily";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../../../styles/responsiveSize";

// define your styles
export const styles = StyleSheet.create({
  priceContainer: {
    backgroundColor: "#1D4783",
  },
  titleContainer: {
    paddingHorizontal: moderateScale(20),
    paddingTop: getStatusBarHeight(true) + moderateScale(15),
    paddingBottom: moderateScale(30),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceHeading: {
    color: colors.borderColorc,
    fontFamily: fontFamily.AvenirBlack,
    fontSize: textScale(18),
    marginBottom: moderateScale(10),
  },
  headerIcons: {
    height: moderateScale(22),
    width: moderateScale(22),
    marginLeft: moderateScale(23),
  },
  currentlyInvested: {
    marginHorizontal: moderateScale(20),
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScaleVertical(17),
    backgroundColor: colors.white,
    borderRadius: moderateScale(6),
    flexDirection: "row",
    marginBottom: moderateScale(44),
  },
  currentlyInvestedKeys: {
    fontFamily: fontFamily.AvenirMedium,
    fontSize: textScale(12),
    color: colors.textGreyF,
    marginBottom:moderateScale(0),
  },
  currentlyInvestedvalue: {
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(16),
    color: colors.black,
    letterSpacing:0.8
  },
  investBody: {
    backgroundColor: colors.white,
    borderTopRightRadius: moderateScale(21),
    padding: moderateScale(20),
    marginTop:-20,
  },
  InvestedCoinsTitle: {
    fontFamily: fontFamily.AvenirMedium,
    fontSize: textScale(13),
    color: colors.tabIconGreyColor,
    marginBottom: moderateScale(11),
  },
  investedCoinsContainerHeading: {
    padding: moderateScaleVertical(15),
    paddingBottom: moderateScale(11),
    opacity: 0.8,
    borderColor: colors.lightGreyInputBorderColor,
    borderWidth: 1,
    borderTopStartRadius: moderateScale(6),
    borderTopEndRadius: moderateScale(6),
    borderBottomWidth: 0.25,
  },
  investedCoinsContainerBody: {
    padding: moderateScale(15),
    opacity: 0.8,
    borderColor: colors.lightGreyInputBorderColor,
    borderWidth: 1,
    borderBottomStartRadius: moderateScale(6),
    borderBottomEndRadius: moderateScale(6),
    borderTopWidth: 0.25,
  },

  coinLogo: {
    height: moderateScale(width / 11),
    width: moderateScale(width / 11),
    marginRight: moderateScale(15),
  },
  investedCoinsvalue: {
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(12),
    marginTop: moderateScale(2),
  },

  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowSpaceBetweenCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowCenterCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  amountWithshortForm: {
    fontFamily: fontFamily.AvenirMedium,
    fontSize: textScale(12),
    marginRight: moderateScale(7),
  },
  horiZontalBar: {
    borderTopWidth: 1,
    color: colors.lightGreyInputBorderColor,
    opacity: 0.3,
    marginHorizontal: moderateScaleVertical(10),
  },
  flatlistContainer: {
    paddingHorizontal: moderateScale(27),
    paddingVertical: moderateScale(13),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fullForm: { 
    fontSize: moderateScale(17),
    fontFamily: fontFamily.AvenirBlack,
  },
  fullForm1: { 
    fontSize: moderateScale(17),
    fontFamily: fontFamily.AvenirBlack,
    // marginBottom: moderateScale(5),
  },
  shortForm: {
    fontSize: moderateScale(14),
    fontFamily: fontFamily.AvenirHeavy,
    opacity: 0.41,
  },
  move: {
    height: moderateScale(width / 28),
    width: moderateScale(width / 30),
    alignSelf: "center",
  },
  moveInvestedCoins: {
    height: moderateScale(width / 33),
    width: moderateScale(width / 33),
    alignSelf: "center",
  },
});
