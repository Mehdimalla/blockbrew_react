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
    paddingTop: getStatusBarHeight(true) + moderateScale(15),
    paddingBottom: moderateScale(18),
    marginHorizontal: moderateScale(20),
  },
  shadowView: {
    borderBottomColor: colors.lightGreyRgbaBorder,
    borderBottomWidth: 0.4,
    borderBottomShadowColor: colors.lightGreyRgbaBorder,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: moderateScale(5),
  },
  profilePic: {
    width: moderateScale(width / 10),
    height: moderateScale(width / 10),
    borderRadius: moderateScale(width / 11 / 2),
    marginRight: moderateScale(12),
  },
  userName: {
    color: colors.black,
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(18),
  },
  userEmail: {
    opacity: 0.55,
    marginTop: moderateScale(9),
  },
  availableToInvestConatiner: {
    marginHorizontal: moderateScale(20),
    marginVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScaleVertical(12),
    marginBottom: moderateScale(16),
    backgroundColor: colors.availabletoInvestBgColor,
    borderWidth: 1,
    borderRadius: moderateScale(6),
    borderColor: colors.availabletoInvestBorderColor,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  availableToInvestHeading: {
    fontFamily: fontFamily.AvenirMedium,
    fontSize: textScale(15),
    opacity: 0.62,
    marginBottom: moderateScale(15),
  },

  move: {
    height: moderateScale(width / 27),
    width: moderateScale(width / 27),
    alignSelf: "center",
  },
  move1: {
    height: moderateScale(width / 30),
    width: moderateScale(width / 30),
    alignSelf: "center",
  },
  flatlistContainer: {
    paddingHorizontal: moderateScale(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalcontainer: {
    backgroundColor: "white",
    padding: moderateScale(25),
    borderRadius: moderateScale(13),
  },
  modalheadingText: {
    fontSize: textScale(16),
    fontFamily: fontFamily.AvenirHeavy,
  },
  descstyle: {
    marginTop: moderateScale(8),
  },
  btncontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: moderateScale(20),
  },
  cancelbtnstyle: {
    paddingHorizontal: moderateScale(38),
    backgroundColor: colors.white,
    borderRadius: moderateScale(6),
    borderWidth: moderateScale(1),
    borderColor: colors.bordersolid,
    paddingVertical: moderateScaleVertical(13),
  },
  cancelbtntxt: {
    color: colors.bordersolid,
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(16),
  },
  continuestyle: {
    paddingHorizontal: moderateScale(38),
    borderRadius: moderateScale(6),
    paddingVertical: moderateScaleVertical(13),
  },
  continuebtntxt: {
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(16),
  },
});
