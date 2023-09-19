import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../../../styles/responsiveSize";
import colors from "../../../styles/colors";
import { getStatusBarHeight } from "react-native-status-bar-height";
import fontFamily from "../../../styles/fontFamily";
export const styles = StyleSheet.create({
  containerBgImg: {
    flex: 0.82,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(20),
    paddingTop: getStatusBarHeight(true) + moderateScale(15),
    alignItems: "center",
  },
  headerlogo: {
    width: width / 1.8,
  },
  skiptxt: {
    fontSize: textScale(15),
    fontFamily: fontFamily.AvenirMedium,
  },
  bottomcontainer: {
    flex: moderateScale(0.18),
    paddingTop: moderateScale(15),
    paddingHorizontal: moderateScale(20),
  },
  bottomtxt: {
    fontSize: textScale(18),
    fontFamily: fontFamily.AvenirHeavy,
  },
  btmstyle: {
    flexDirection: "row",
    marginVertical: moderateScaleVertical(30),
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonstyle: {
    width: width / moderateScale(2.35),
  },
  buttonTxt: {
    fontSize: textScale(14),
    fontFamily: fontFamily.AvenirHeavy,
    color: colors.white,
  },
  actioncontainer: {
    padding: moderateScale(20),
  },
  titlestyle: {
    fontSize: textScale(18),
    fontFamily:fontFamily.AvenirHeavy,
  },
  googlestyle: {
    marginVertical: moderateScale(14),
    backgroundColor: "white",
    borderRadius: moderateScale(8),
    borderWidth: moderateScale(0.5),
    borderColor: colors.black,
  },
  googletxt: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.AvenirHeavy,
  },
  emailbtn: {
    marginVertical: moderateScale(5),
    backgroundColor: "white",
    borderRadius: moderateScale(8),
    borderWidth: moderateScale(0.5),
    borderColor: colors.blueButton,
  },
  emailtxt: {
    fontSize: textScale(14),
    color: colors.blueButton,
    fontFamily: fontFamily.AvenirHeavy,
  },
  imgIconStyle: {
    width: moderateScale(24),
    height: moderateScale(23),
  },
  imgIconStyleEmail: {
    width: moderateScale(23),
    height: moderateScale(17),
  },
  orTxt: {
    fontSize: textScale(14),
    fontFamily: fontFamily.AvenirMedium,
  },
  descriptionstyle: {
    marginVertical: moderateScale(10),
    alignItems: "center",
    justifyContent:'center'
  },
  descriptiontxt: {
    color: colors.greyTxt,
    fontFamily: fontFamily.AvenirMedium,
    fontSize: textScale(13),
  },
});
