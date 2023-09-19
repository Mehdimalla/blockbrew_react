import { StyleSheet } from "react-native";
import colors from "./colors";
import fontFamily from "./fontFamily";
import { moderateScale, moderateScaleVertical, textScale, width } from "./responsiveSize";

const commonStyles = StyleSheet.create({
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  rowAlignCen: { flexDirection: "row", alignItems: "center" },
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
  regular10Black: {
    fontSize: textScale(11),
    fontFamily: fontFamily.AvenirRegular,
    color: colors.black,
  },
  regular12Black: {
    fontSize: textScale(12),
    fontFamily: fontFamily.AvenirRegular,
    color: colors.black,
  },
  regular14Black: {
    fontSize: textScale(14),
    fontFamily: fontFamily.AvenirRegular,
    color: colors.black,
  },
  regular16Black: {
    fontSize: textScale(16),
    fontFamily: fontFamily.AvenirRegular,
    color: colors.black,
  },
  regular18Black: {
    fontSize: textScale(18),
    fontFamily: fontFamily.AvenirRegular,
    color: colors.black,
  },
  medium10Black: {
    fontSize: textScale(10.5),
    fontFamily: fontFamily.AvenirMedium,
    color: colors.black,
    letterSpacing: 0.3,
  },
  medium12Black49opc: {
    fontFamily: fontFamily.AvenirMedium,
    fontSize: textScale(11),
    color: colors.black,
    opacity: 0.49,
  },
  medium12Black: {
    fontSize: textScale(12),
    fontFamily: fontFamily.AvenirMedium,
    color: colors.black,
  },
  medium13Black: {
    fontSize: textScale(13),
    fontFamily: fontFamily.AvenirMedium,
    color: colors.black,
  },
  medium14Black: {
    fontSize: textScale(14),
    fontFamily: fontFamily.AvenirMedium,
    color: colors.black,
  },
  medium15Black: {
    fontSize: textScale(15),
    fontFamily: fontFamily.AvenirMedium,
    color: colors.black,
  },
  medium16Black: {
    fontSize: textScale(16),
    fontFamily: fontFamily.AvenirMedium,
    color: colors.black,
  },
  medium18Black: {
    fontSize: textScale(18),
    fontFamily: fontFamily.AvenirMedium,
    color: colors.black,
  },
  heavy10Black: {
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(10),
    color: colors.black,
  },
  heavy12Black: {
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(12),
    color: colors.black,
  },
  heavy13Black: {
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(13),
    color: colors.black,
  },
  heavy14Black: {
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(14),
    color: colors.black,
  },
  heavy15Black: {
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(15),
    color: colors.black,
  },
  heavy16Black: {
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(16),
    color: colors.black,
  },
  heavy18Black: {
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(18),
    color: colors.black,
  },
  black12Black: {
    fontSize: textScale(12),
    fontFamily: fontFamily.AvenirBlack,
    color: colors.black,
  },
  black14Black: {
    fontSize: textScale(14),
    fontFamily: fontFamily.AvenirHeavy,
    color: colors.black,
  },
  black15Black: {
    fontSize: textScale(15),
    fontFamily: fontFamily.AvenirBlack,
    color: colors.black,
  },
  black16Black: {
    fontSize: textScale(16),
    fontFamily: fontFamily.AvenirBlack,
    color: colors.black,
  },
  black18Black: {
    fontSize: textScale(18),
    fontFamily: fontFamily.AvenirBlack,
    color: colors.black,
  },
  icon26x26: {
    height: moderateScale(width / 15),
    width: moderateScale(width / 13),
    marginRight: moderateScale(15),
  },
  horintalBarStyle: {
    marginHorizontal: 0,
    opacity: 0.2,
    marginVertical: moderateScale(9),
  },
  marginV20xH15: {
    marginHorizontal: moderateScale(20),
    marginVertical: moderateScale(15),
  },
  marginV20xH10: {
    marginHorizontal: moderateScale(20),
    marginVertical: moderateScale(10),
  },
  paddingV20xH20: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(20),
  },
  paddingV20xH15: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(15),
  },
  paddingV20xH10: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
  },
  textinputStyle: {
    borderColor: colors.lightGreyTxt,
    borderWidth: 0.5,
    paddingVertical: moderateScale(9),
  },
  moveIcon: {
    height: moderateScale(12),
    width: moderateScale(12),
    alignSelf: "center",
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
    // paddingHorizontal: moderateScale(38),
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
    // paddingHorizontal: moderateScale(38),
    borderRadius: moderateScale(6),
    paddingVertical: moderateScaleVertical(13),
  },
  continuebtntxt: {
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(16),
  },
});

export default commonStyles;
