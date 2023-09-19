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
    paddingBottom: moderateScale(28),
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
    fontSize: textScale(15),
    fontFamily: fontFamily.Helveticaneue,
    borderWidth: 0,
    borderRadius: moderateScale(10),
    height: moderateScale(54),
    paddingHorizontal: moderateScale(23),
  },
  boxEndShadow: {
    borderBottomColor: colors.lightGreyRgbaBorder,
    borderBottomWidth: 0.5,
    borderBottomShadowColor: colors.blackOpacity20,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 4,
  },
  horiZontalBar: {
    borderTopWidth: 0.5,
    color: colors.lightGreyInputBorderColor,
    opacity: 0.4,
    marginHorizontal: moderateScale(20),
  },
  flatListConatiner: {
    marginHorizontal: moderateScale(20),
    paddingVertical: moderateScaleVertical(23),
    flexDirection: "row",
  },
  coinLogo: {
    height: moderateScale(width / 9),
    width: moderateScale(width / 9),
    marginRight: moderateScale(9),
  },
  fullForm: {
    fontSize: textScale(16),
    fontFamily: fontFamily.AvenirBlack,
    marginRight: moderateScale(7),
  },
  shortForm: {
    fontSize: textScale(13),
    fontFamily: fontFamily.AvenirHeavy,
    opacity: 0.41,
  },
  date: {
    fontSize: textScale(11.5),
    fontFamily: fontFamily.AvenirHeavy,
    opacity: 0.41,
  },
  rowSpaceBetween: { flexDirection: "row", justifyContent: "space-between" },
  horiZontalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "79%",
  },
  buyOrSell: { fontFamily: fontFamily.AvenirHeavy, fontSize: textScale(14) },
});
