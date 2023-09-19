import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fontFamily from "../../../styles/fontFamily";
import { moderateScale, textScale } from "../../../styles/responsiveSize";
export const styles = StyleSheet.create({
  newpasstxt: {
    fontSize: textScale(11),
    fontFamily: fontFamily.AvenirMedium,
    lineHeight: moderateScale(19),
  },
  textInputstyle: {
    paddingVertical: moderateScale(15),
    borderWidth: 0.5,
    marginTop: moderateScale(14),
    borderColor:colors.blackOpacity43 ,
  },
  btnstyle: {
    paddingVertical: moderateScale(14),
    marginTop: moderateScale(24),
  },
  btntxt: {
    fontFamily: fontFamily.AvenirHeavy,
  },
});
