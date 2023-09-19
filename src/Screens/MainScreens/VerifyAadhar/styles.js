import { StyleSheet } from "react-native";
import fontFamily from "../../../styles/fontFamily";
import { moderateScale, textScale } from "../../../styles/responsiveSize";
export const styles = StyleSheet.create({
  liststyle: {
    paddingTop: moderateScale(15),
  },
  textInputstyle: {
    marginHorizontal: moderateScale(20),
    paddingVertical: moderateScale(15),
    borderWidth: 0.5,
  },
  continuebtnstyle: {
    marginVertical: moderateScale(16),
    marginHorizontal: moderateScale(20),
    paddingVertical: moderateScale(15),
  },
  continuebtn: {
    fontSize: textScale(16),
    fontFamily: fontFamily.AvenirHeavy,
  },
});