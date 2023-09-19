import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../../../styles/responsiveSize";
import fontFamily from "../../../styles/fontFamily";
import { getStatusBarHeight } from "react-native-status-bar-height";

// define your styles
export const styles = StyleSheet.create({
  blueBgForNonLogin: {
    backgroundColor: colors.darkBlue,
    paddingTop: getStatusBarHeight(true) + moderateScale(25),
    paddingBottom: moderateScale(22),
    paddingHorizontal: moderateScale(24),
  },
  Hi_Admin: {
    fontSize: textScale(15),
    color: colors.white,
    fontFamily: fontFamily.AvenirHeavy,
  },
  Ready_to_invest: {
    marginVertical: moderateScaleVertical(16),
    fontSize: textScale(21),
    color: colors.white,
    fontFamily: fontFamily.AvenirHeavy,
  },
  startByAddingBank: {
    color: colors.white,
    fontSize: textScale(15),
    lineHeight: moderateScale(23),
    fontFamily: fontFamily.AvenirHeavy,
  },
  WhyAddBank: {
    fontSize: textScale(15),
    color: colors.white,
    textAlign: "center",
    fontFamily: fontFamily.AvenirHeavy,
  },
  addbuyRefer: {
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScaleVertical(12),
    flexDirection: "row",
    justifyContent: "space-around",
  },
  addbuyReferText: {
    fontSize: textScale(14),
    color: colors.black,
    textAlign: "center",
    fontFamily: fontFamily.AvenirMedium,
    lineHeight: moderateScale(22),
  },
  rewardsSectionBlueBg: {
    backgroundColor: colors.blueButton,
    height: width / 5.5,
    width: width / 5.5,
    borderRadius: width / 5.5 / 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: moderateScaleVertical(13),
  },
  rewardsSectionImg: { height: moderateScale(26), width: moderateScale(32) },
  NewlyLaunched: {
    // marginLeft: moderateScale(20),
    marginVertical: moderateScaleVertical(13),
  },
  NewlyLaunchedHeading: {
    fontFamily: fontFamily.AvenirBlack,
    fontSize: textScale(17),
    lineHeight: moderateScale(25),
    color: colors.black,
    marginBottom: moderateScale(5),
  },
  NewlyLaunchedDes: {
    fontFamily: fontFamily.AvenirMedium,
    fontSize: textScale(16),
    opacity: 0.5,
    marginBottom: moderateScale(19),
  },
  youHaveCodeSection: {
    marginHorizontal: moderateScale(20),
    padding: moderateScale(15),
    backgroundColor: colors.lightGrey,
    borderRadius: moderateScale(8),
    marginBottom: moderateScale(40),
  },
  youHaveCodeSectionTitleConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: moderateScale(10),
    alignItems: "flex-end",
  },
  couponIcon: {
    height: moderateScale(width / 8),
    width: moderateScale(width / 8),
    opacity: 0.85,
  },
  youHaveCodeTitle: {
    fontFamily: fontFamily.AvenirBlack,
    fontSize: textScale(19),
    flexShrink: 0.7,
  },
  codeUsedPerAccount: {
    fontFamily: fontFamily.AvenirMedium,
    fontSize: textScale(14),
  },
  codeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: moderateScaleVertical(8),
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.lightGreyInputBorderColor,
    height: moderateScale(44),
    borderRadius: moderateScale(5),
  },
  btnStyle: {
    width: "87%",
    height: moderateScale(45),
    paddingVertical: moderateScale(10),
    alignSelf: "flex-end",
    backgroundColor: colors.tabIconColor,
  },
  buttonTxt: {
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(16),
    borderRadius: moderateScale(5),
  },

  // crypto made easy flatlist style
  cryptoMadeEasyBg: {
    width: width / 1.3,
    height: width / 1.5,
    marginRight: moderateScale(15),
    borderRadius: moderateScale(11),
    overflow: "hidden",
    opacity: 0.65,
    padding: moderateScale(20),
    justifyContent: "flex-end",
  },
  cryptoMadeEasyTitle: {
    color: colors.white,
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(18),
    lineHeight: moderateScale(25),
    marginBottom: moderateScale(7),
    opacity: 1,
  },
  cryptoMadeEasyDescription: {
    color: colors.white,
    fontFamily: fontFamily.AvenirMedium,
    fontSize: textScale(12),
    lineHeight: moderateScale(16),
    marginBottom: moderateScale(2),
    opacity: 1,
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
