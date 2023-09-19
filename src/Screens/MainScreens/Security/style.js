import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fontFamily from "../../../styles/fontFamily";
import { moderateScale, textScale, width } from "../../../styles/responsiveSize";

export const styles = StyleSheet.create({
  btnTxtStyle: {
    color: colors.green,
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(15),
  },

  btnStyle: {
    borderColor: colors.green,
    borderWidth: moderateScale(1),
    backgroundColor: colors.white,
    marginHorizontal: moderateScale(20),
    width: width - moderateScale(40),
    position: "absolute",
    bottom: moderateScale(30),
  },
  modalcontainer:
  {
    backgroundColor: "white",
    padding: moderateScale(25),
    borderRadius: moderateScale(13),
  },
  modalheadingText:
  {
    fontSize: textScale(16),
    fontFamily: fontFamily.AvenirHeavy
  },
  descstyle:
  {
    marginTop: moderateScale(11)
  },
  desctxt:
  {
    fontFamily: fontFamily.AvenirRegular,
    fontSize: textScale(12)
  },
  btncontainer:
  {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: moderateScale(25)
  },
  cancelbtnstyle:
  {
    paddingHorizontal: moderateScale(38),
    backgroundColor: colors.white,
    borderRadius: moderateScale(6),
    borderWidth: moderateScale(1),
    borderColor: colors.bordersolid,
  },
  cancelbtntxt:
  {
    color: colors.bordersolid,
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(16)
  },
  continuestyle:
  {
    paddingHorizontal: moderateScale(32),
    borderRadius: moderateScale(6)
  },
  continuebtntxt:
  {
    fontFamily: fontFamily.AvenirHeavy,
    fontSize: textScale(16)
  }
});