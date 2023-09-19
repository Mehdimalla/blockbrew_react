import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fontFamily from "../../../styles/fontFamily";
import { moderateScale, textScale } from "../../../styles/responsiveSize";

export const styles = StyleSheet.create({
  headingstyle: {
    marginHorizontal: moderateScale(20),
    marginTop: moderateScale(25),
  },
  addbankaccounttxt: {
    fontSize: textScale(13),
    color: colors.black,
    fontFamily: fontFamily.AvenirMedium,
  },
  bankaccountdesc: {
    fontFamily: fontFamily.AvenirMedium,
    color: colors.blackOpacity70,
    marginTop: moderateScale(16),
  },
  jacksparrowtxt: {
    marginTop: moderateScale(4),
    color: colors.black,
    fontFamily: fontFamily.AvenirMedium,
    fontSize: textScale(14),
  },
  inputcontainer :
  { marginTop: moderateScale(15) },
  textInputstyle: {
    marginHorizontal: moderateScale(20),
    paddingVertical: moderateScale(15),
    borderWidth: 0.5,
    borderColor: colors.blackOpacity43,
  },
  continuebtnstyle: {
    marginVertical: moderateScale(16),
    marginHorizontal: moderateScale(20),
    paddingVertical: moderateScale(13),
  },
  continuebtn: {
    fontSize: textScale(16),
    fontFamily: fontFamily.AvenirHeavy,
  },
});
